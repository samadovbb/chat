const { isSchemaVal } = require("../module/schema.fun")
const schema = require("../module/schema.sign")
const { query } = require("../database/db.fun")
const md5 = require('md5');


let authUsers = (hash) => {
    return false;
}

let phoneNumber = async(io, data, clientIp) => {
    if (isSchemaVal(schema.schemaPhoneNumber, data).err != 0)
        return io.emit("err show", { message: "Telfon raqam xato kirtilgan!.", status: 401 });

    let userId = await query("SELECT *FROM users WHERE phone=?", [data.phone]);

    if (userId.length == 0)
        userId = (await query("INSERT INTO users (full_name , phone ) VALUES (?,?)", [data.phone, data.phone])).insertId
    else
        userId = userId[0].id

    let ctime = new Date().getTime();
    let chash = md5(userId + clientIp + ctime);
    let code = chash.substring(0, 5);

    await query("DELETE FROM users_active WHERE ipadr=? and user_id=? and steep>0 and steep<10", [clientIp, userId])
    let auser = await query("INSERT INTO users_active (ipadr,user_id,chash,ctime,code) VALUES (?,?,?,?,?)", [clientIp, userId, chash, ctime, code])

    return io.emit("set code", { message: "Kod yuborildi", status: 200, cid: auser.insertId, code: code });
}


let checkCode = async(io, data, clientIp) => {

    if (isSchemaVal(schema.schemaIdCode, data).err != 0)
        return io.emit("err show", { message: "Ma'lumot xato kirtilgan!.", status: 401 });

    let user = await query("SELECT *FROM users_active WHERE id=? and ipadr=? and steep>0 and steep<10", [data.cid, clientIp]);

    if (user.length == 0)
        return io.emit("err show", { message: "Bunaqa senans mavjud emas!.", status: 401 })
    if (user[0].code == data.code && user[0].steep < 10) {
        await query("UPDATE users_active SET steep=0 WHERE id=? and ipadr=? ", [data.cid, clientIp]);
        return io.emit("set hashCode", { message: "Hash kod o'rnatilindi!.", status: 200, chash: user[0].chash });
    }
    await query("UPDATE users_active SET steep=steep+1 WHERE id=? and ipadr=? ", [data.cid, clientIp]);
    return io.emit("err show", { message: "Kod xato kirtilindi", status: 401 });


}


module.exports = {
    authUsers: authUsers,
    phoneNumber: phoneNumber,
    checkCode: checkCode
}
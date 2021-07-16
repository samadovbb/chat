const express = require("express")
const router = express.Router()
const md5 = require('md5');
const { isSchemaVal } = require("../module/schema.fun");
const { schemaPhoneNumber, schemaIdCode } = require("../module/schema.sign");
const { query } = require("../database/db.fun")
const { randCode, getIp } = require("../func/all.func")
const { notFound, successSend } = require("../func/fun.send");


// steep phone code ... 
router.get("/step/phone", async(req, res) => {
    const h = req.query
    if (isSchemaVal(schemaPhoneNumber, h).err != 0)
        return notFound(res, "Xato telfon raqam!.");
    let code = randCode();
    let sendCode = await query("INSERT INTO send_code (phone,code) values (?,?)", [h.phone, code]);
    return res.json({
        message: {
            data: {
                code: code,
                cid: sendCode.insertId,
            },
            successCode: 200,
            datetime: new Date()
        }
    });

})

// steep sms code .....
router.get("/step/code", async(req, res) => {
    const h = req.query
    if (isSchemaVal(schemaIdCode, h).err != 0)
        return notFound(res, "Xato ma'lumot kirtildi!.");
    // borlikga tekshir
    let isUser = await query("SELECT *FROM send_code WHERE id=? and code=? and action=1 ", [h.cid, h.code]);
    if (isUser.length == 1) {
        // insert qili .
        await query("INSERT INTO users (phone,full_name,limg) VALUE (?,?,?)", [isUser[0].phone, isUser[0].phone, "ch-avatar.png"]);
        // sms uchir .
        await query("UPDATE send_code SET action=0 WHERE id=? and code=?  and action=1 ", [h.cid, h.code]);
        let user = await query("SELECT *FROM users WHERE phone=?", [isUser[0].phone]);
        let hash = md5(h.code + isUser[0].phone);
        // action ochib olgin .
        await query("INSERT INTO users_action (user_id,ipaddr,hash) VALUE (?,?,?)", [user[0].id, getIp(req), hash])
        successSend(res, { hash: hash }, isUser[0].id);
    }
    return notFound(res, "Sms kod xato kirtildi!.");
})

// module import ....
module.exports = router
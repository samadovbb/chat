const { query } = require("../database/db.fun")
const { notFound } = require("./fun.send");

let auth = async(req, res, next) => {
    let hash = req.body.hash || req.query.hash
    let uhash = await query("SELECT *FROM users_action WHERE hash=?", [hash]);
    if (uhash.length == 0)
        return notFound(res);
    req.userId = uhash[0].user_id;
    // console.log(req.userId)
    next();
}

module.exports = auth
const express = require("express")
const router = express.Router()
const { query } = require("../database/db.fun")
const { notFound, successSend, allowSend } = require("../func/fun.send");

// get me contact 
router.get("/me", async(req, res) => {
    let contact = await query("SELECT contact.*,users.phone,users.limg,users.phone FROM contact ,users WHERE user_id=? and contact.contact_id=users.id ", [req.userId]);
    successSend(res, contact, req.userId);
})

// contact add
router.post("/add", async(req, res) => {
    let h = req.body
    let us = await query("SELECT *FROM users WHERE phone=?", [h.phone]);
    // user not found  . 
    if (us.length == 0) return notFound(res);
    let isContact = await query("SELECT * FROM contact WHERE user_id=? and contact_id=?", [req.userId, us[0].id]);
    if (isContact.length != 0) return allowSend(res);
    // add contact users .
    await query("INSERT INTO contact (user_id,contact_id) values (?,?)", [req.userId, us[0].id]);
    let contact = await query("SELECT contact.*,users.phone,users.limg,users.phone FROM contact ,users WHERE user_id=? and contact.contact_id=users.id ", [req.userId]);
    //  success respons
    return successSend(res, { all: contact, add: us[0] }, req.userId);
})

// contact delete
router.delete("/delete", async(req, res) => {
    let h = req.body
    await query("DELETE FROM contact WHERE user_id=? and contact_id=?", [req.userId, h.contact_id]);
    //  success respons
    let contact = await query("SELECT contact.*,users.phone,users.limg,users.phone FROM contact ,users WHERE user_id=? and contact.contact_id=users.id ", [req.userId]);
    return successSend(res, contact, req.userId);
})


// module export ....
module.exports = router;
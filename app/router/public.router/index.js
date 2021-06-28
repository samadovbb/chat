const express = require("express")
const router = express.Router()
const {query} =require("../../database/db.fun")


//sign in ...
router.get("/",(req,res)=>{
    res.render("public/index");
})

//email ...
router.post("/",async (req,res)=>{
    const h= req.body;
    let user=await query("SELECT *FROM users WHERE email=?",[h.email]);
    if(user>0) {
        //method sendEmailCode .......
        res.render("public/index");
    }
    else {
        res.render("public/index-2",[rh.email]);
    }
})



module.exports = router ;
module.exports = router ;
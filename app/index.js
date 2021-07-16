const express = require("express")
const app = express()
const auth = require("./func/fun.auth");

// sign router 
app.use("/sign", require("./router/router.sign"));
// contact router 
app.use("/contact", [auth], require("./router/router.contact"));


module.exports = app
const express = require("express")
const app = express()

// ochiq routerlar 
app.use("/", require("./router/public.router"))



module.exports = app;
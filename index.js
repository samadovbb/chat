const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")
const config = require("./app/config/index.json").app
const chalk = require('chalk');
const PORT = config.PORT || 5050


// parse application/x-www-form-urlencoded and parse application ... and public .... and file yuklash ... and ejs ....
app.use(express.urlencoded({ extended: false })).use(express.json()).use(express.static('public')).use(fileUpload())


// create app ;
app.listen(PORT, () => {
    console.log(chalk.blue(`Create server http://localhost:${PORT} .... click url`))
})
const express = require("express");
const app = express();
const config = require("./config.json");

// get port config.json ..
const PORT = config.app.port;

// app.use all ...
app.use(express.urlencoded({ extended: false })).use(express.json()).set('view engine', 'ejs').use(express.static('public'));

// router app
app.use("/api", require("./app"));

app.listen(PORT, () => {
    console.log(`Create server http://localhost:${PORT}  `);
})
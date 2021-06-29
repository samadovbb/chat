const server = require('http').createServer();
// socket io connect .....
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})

const config = require("./app/config/index.json").app
const chalk = require('chalk');
const PORT = config.PORT || 5050

// parse application/x-www-form-urlencoded and parse application ... and public .... and file yuklash ... and ejs ....
//app.use(express.urlencoded({ extended: false })).use(express.json()).use(express.static('public'))
const { AuthUsers } = require("./app/func/func.auth")

io.on('connection', (socket) => {
    let hash = socket.handshake.query.hash

    // is AuthUsers ...
    if (AuthUsers(hash)) {
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    } else {
        console.log(hash)
        io.emit("error", "hi")
    }

});


// create app ; 
server.listen(PORT, () => {
    console.log(`Server ready. Port: ${PORT}`)
})
function randNum() {
    return Math.floor(Math.random() * 10);
}

const randCode = () => {
    return `CH-${randNum()}${randNum()}${randNum()}${randNum()}`;
}

let getIp = (req) => {
    return (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
        req.socket.remoteAddress
}


module.exports = {
    randCode,
    getIp
}
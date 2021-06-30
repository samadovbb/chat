const db = require("./db").promise()
const chalk = require('chalk');

let query = async(sql, data) => {
    try {
        let d = await db.query(sql, data);
        return d[0];
    } catch (err) {
        console.log(chalk.red(`EDB: ./app/database/db.fun.js \n${err}`));
        return { err: 1, errdata: err };
    }
}

module.exports = {
    query: query
}
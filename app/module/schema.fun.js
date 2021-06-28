const chalk = require('chalk');

const isSchemaVal = (schema,data)=>{
    let isVal =  schema.validate(data);
    if(isVal.error) {
        console.log(chalk.bgRed(`/app/module/schema.fun.js 6 qator errValidate: "Ma'lumot xato kirtildi ."`))
        return {err: isVal.error, data: "Ma'lumot xato kirtildi ."};
    }
    else {
        // console.log(chalk.bgGreen(`/app/module/schema.fun.js 10 qator errValide: "Ma'lumot xato kirtildi ."`))
        return {err: 0, data: "Ma'lumotlar to'g'ri"}
    }
}





module.exports={
    isSchemaVal:isSchemaVal
}
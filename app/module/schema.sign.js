const Joi = require('joi');

//telfon raqam tekshrish ...
const schemaPhoneNumber = Joi.object({
    phone: Joi.string().pattern(new RegExp('^[0-9]{9,9}$')).required(),
    code: Joi.string().pattern(new RegExp('^[0-9]{2,10}$')).required(),
})

module.exports ={
    schemaPhoneNumber:schemaPhoneNumber
}
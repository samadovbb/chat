const Joi = require('joi');

//telfon raqam tekshrish ...
const schemaPhoneNumber = Joi.object({
    phone: Joi.string().pattern(new RegExp('^[0-9]{9,9}$')).required()
})

//telfon raqam tekshrish ...
const schemaIdCode = Joi.object({
    cid: Joi.string().pattern(new RegExp('^[0-9]{1,9}$')).required(),
    code: Joi.string().required()
})


module.exports = {
    schemaPhoneNumber: schemaPhoneNumber,
    schemaIdCode: schemaIdCode
}
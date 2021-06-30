const isSchemaVal = (schema, data) => {
    let isVal = schema.validate(data);
    //  console.log(isVal.error)
    if (isVal.error)
        return { err: isVal.error };
    else
        return { err: 0 }
}

module.exports = {
    isSchemaVal: isSchemaVal
}
//err not found
let notFound = (res, err = "Kechrasiz bizda mavjud emas!.") => {
    res.json({
        message: {
            errCode: 1,
            err: err,
            datatime: new Date()
        }
    });
}

//success send
let successSend = (res, data, userId) => {
    res.json({
        message: {
            successCode: 200,
            datetime: new Date()
        },
        data: data,
        user: userId,
        datatime: new Date()
    });
}

//allow send
let allowSend = (res) => {
    res.json({
        message: {
            errCode: 2,
            err: "Bu oldindan mavjud bo'lgan amal!.",
            datatime: new Date()
        }
    })
}

module.exports = {
    notFound,
    successSend,
    allowSend
}
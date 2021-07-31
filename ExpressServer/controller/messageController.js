const messageService = require("../services/messageServices")
// const error = require('../common/error')
// const exceptions = require('../common/exceptions')


const createMessage = async (req,res) => {
    const data = req.body
    console.log("INIT CREATE USER  data:" + JSON.stringify(data))
    // if(!data.userName){
    //     console.log("no name in  CREATE USER  data:" + JSON.stringify(data))
    //     throw new error.AppError(exceptions.exceptionType.badRequest)
    // } 
    // if(!data.password){
    //     console.log("no pass in  CREATE USER  data:" + JSON.stringify(data))
    //     throw new error.AppError(exceptions.exceptionType.badRequest)
    // } 
    const newMessage = await messageService.createMessage(data);
    console.log(JSON.stringify(newMessage))
    return res.status(201).json(newMessage)
}

module.exports = {
    createMessage
}

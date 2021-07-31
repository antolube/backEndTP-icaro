const messageServices = require("../services/messageServices")
// const error = require('../common/error')
// const exceptions = require('../common/exceptions')

const getAllUsers = async (req,res)=>{
    const query = req.query
    console.log("get all controller - query : "+JSON.stringify(query))
    // if(!req.query.condition){
    //     throw new error.AppError(exceptions.exceptionType.productos.badRequest,"debe colocar un estado 0 ó 1")
    // }
    const filter = {
        // condition: req.query.condition,
        user_name: req.query.user_name,
        id_user: req.query.id_user
    }
    // if(req.query.username){
    //     filter.username = req.query.username
    // }
    //llamar al servicio de productos
    const usuarios= await messageServices.getAllService(filter)
    res.status(200).json(usuarios)
}

const createMessage = async (req,res) => {
    const data = req.body
    console.log("INIT CREATE Message  data:" + JSON.stringify(data))
    // if(!data.userName){
    //     console.log("no name in  CREATE USER  data:" + JSON.stringify(data))
    //     throw new error.AppError(exceptions.exceptionType.badRequest)
    // } 
    // if(!data.password){
    //     console.log("no pass in  CREATE USER  data:" + JSON.stringify(data))
    //     throw new error.AppError(exceptions.exceptionType.badRequest)
    // } 
    const newMessage = await messageServices.createMessage(data);
    console.log(JSON.stringify(newMessage))
    return res.status(201).json(newMessage)
}

const getAllMsgSenders = async (req,res)=>{
    const query = req.query
    console.log("get all msg sender controller - query : "+JSON.stringify(query))
    // if(!req.query.condition){
    //     throw new error.AppError(exceptions.exceptionType.productos.badRequest,"debe colocar un estado 0 ó 1")
    // }
    const filter = {
        recipient_id: req.query.recipient_id,
    }
    // if(req.query.username){
    //     filter.username = req.query.username
    // }
    //llamar al servicio de productos
    const message= await messageServices.getAllMsgSenders(filter)
    res.status(200).json(message)
}

const getAllMsgReceived = async (req,res)=>{
    const query = req.query
    console.log("get all msg received controller - query : "+JSON.stringify(query))
    // if(!req.query.condition){
    //     throw new error.AppError(exceptions.exceptionType.productos.badRequest,"debe colocar un estado 0 ó 1")
    // }
    const filter = {
        sender_id: req.query.sender_id
    }
    // if(req.query.username){
    //     filter.username = req.query.username
    // }
    //llamar al servicio de productos
    const message= await messageServices.getAllMsgReceived(filter)
    res.status(200).json(message)
}

module.exports = {
    getAllUsers,
    createMessage,
    getAllMsgSenders,
    getAllMsgReceived,
}

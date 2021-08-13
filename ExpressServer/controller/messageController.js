const messageServices = require("../services/messageServices")
// const error = require('../common/error')
// const exceptions = require('../common/exceptions')

const getAllUsers = async (req,res)=>{
    const query = req.query
    console.log("gET All User Diary - query : "+JSON.stringify(query));
    
    const filter = {
        user_name: req.query.user_name,
        id_user: req.query.id_user
    }
   
    //llamar al servicio de productos
    const usuarios= await messageServices.getAllService(filter)
    res.status(200).json(usuarios)
}

const createMessage = async (req,res) => {
    
    const data = {
        sender_id: req.body.sender_id,
        sender_name: req.body.sender_name,
        recipient_id: req.body.recipient_id,
        recipient_name: req.recipient_id,
        message: req.body.message
    }
    // console.log("INIT CREATE Message  data:" + JSON.stringify(data))

    const newMessage = await messageServices.createMessage(data);
    // console.log(JSON.stringify(newMessage))
    return res.status(201).json(newMessage)
}

const getAllMsgSent = async (req,res)=>{
    const query = req.query
    console.log("get All Msg Sent Controller - query : "+JSON.stringify(query))
    if(!req.query){
        throw new error.AppError(exceptions.exceptionType.productos.badRequest,"Se debe ingresar id_user")
    }

    const filter = {
        sender_id: req.query.id_user
    }
    //llamar al servicio de productos
    const message= await messageServices.getAllMsgSent(filter)
    res.status(200).json(message)
}

const getAllMsgReceived = async (req,res)=>{
    const query = req.query
    console.log("get all msg received controller - query : "+JSON.stringify(query))

    const filter = {
        recipient_id: req.query.id_user,
    }
  
    const message= await messageServices.getAllMsgReceived(filter)
    res.status(200).json(message)
}

const updatedMessage = async (req,res)=>{
    const data = {
        sent_deleted:req.body.updatedMsgSent,
        received_deleted:req.body.updatedMsgReceided
    }    
    
    const params = req.params
    // console.log("actualizar controller - params : "+JSON.stringify(params))
    const id = params.id
    // console.log("actualizar controller - body : "+JSON.stringify(data))
    const eliminado = await messageServices.updatedMessage(id,data)
    res.status(200).json({eliminado})
}

module.exports = {
    getAllUsers,
    createMessage,
    getAllMsgSent,
    getAllMsgReceived,
    updatedMessage
}

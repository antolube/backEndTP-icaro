const MessageModel = require('../models/messageModel');
const userModel = require('../models/userModel');
// const error = require('../common/error');
// const exception = require('../common/exception');

const getAllService = async({user_name,id_user})=>{

    const where = {}
    if (user_name){
        where. user_name = user_name;
    }
    if (id_user){
        where. id_user = id_user;
    }

    const usuarios = await userModel.findAll({attributes:['user_name','id_user','email'],
    where:where});
    return usuarios;
}

const createMessage = async ({message,sender_id,sender_name,recipient_id,recipient_name}) => {
    // console.log("Create Message:"+ JSON.stringify({message,sender_id,sender_name,recipient_id,recipient_name}));
    const where = {}
    if (recipient_id){
        where. id_user =  recipient_id;
    }
    
    const user_name = JSON.parse(JSON.stringify(await userModel.findOne({attributes:['user_name'],where:where})));

    // console.log("estoy recieciendo este user_name" + JSON.stringify(user_name));

    const data = {
        message: message,
        sender_id: sender_id,
        sender_name: sender_name,
        recipient_id:recipient_id,
        recipient_name: user_name.user_name,
        created_at: Date(),
    }

    // console.log("create Message:"+ JSON.stringify(data));
    // console.log(data.recipient_name.user_name)

    return await MessageModel.create(data);
}

const getAllMsgSent = async({sender_id})=>{

    const where = {}
    if (sender_id){
        where. sender_id =  sender_id;
        where. sent_deleted = 1;
    }
    const messages = await MessageModel.findAll({atributes:['sender_id'],
    where:where});
    return messages;
}

const getAllMsgReceived = async({recipient_id})=>{

    const where = {}
    if (recipient_id){
        where. recipient_id = recipient_id;
        where. received_deleted = 1;
    }

    const messages = await MessageModel.findAll({atributes:['recipient_id','message','created_at'],
    where:where});
    return messages;
}

const updatedMessage = async (id,{sent_deleted,received_deleted}) =>{
    
    where={}
    if(id){
      where. id_message = id;
    }
    const data ={
      sent_deleted:sent_deleted,
      received_deleted:received_deleted,
    }
    // console.log("mensaje estado"+JSON.stringify({sent_deleted,received_deleted}));
    const message = await MessageModel.update(data,{
        where:where});
    // console.log(JSON.stringify(message));  
    return message
}


module.exports = {
    getAllService,
    createMessage,
    getAllMsgSent,
    getAllMsgReceived,
    updatedMessage
}
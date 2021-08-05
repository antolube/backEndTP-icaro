const MessageModel = require('../models/messageModel');
const userModel = require('../models/userModel');
// const error = require('../common/error');
// const exception = require('../common/exception');

const getAllService = async({user_name,id_user})=>{

    console.log("get All User Diary - condition : "+user_name +"--"+id_user);
    const where = {}
    if (user_name){
        where. user_name = user_name;
    }
    if (id_user){
        where. id_user = id_user;
    }

    const usuarios = await userModel.findAll({attributes:['user_name','id_user'],
    where:where});
    // const usuarios = await userModel.findAll({condition,email})
    console.log(" User Diary return :" +JSON.stringify(usuarios));
    return usuarios;
}

const createMessage = async ({message,sender_id,recipient_id}) => {
    // const {message,sender_id,recipient_id} = data
    console.log("Create Message:"+ JSON.stringify({message,sender_id,recipient_id }));
    const data = {
        message: message,
        sender_id: sender_id,
        recipient_id:recipient_id,
        created_at: new Date(),
    }

    console.log("create Message:"+ JSON.stringify(data));

    return await MessageModel.create(data);
}

const getAllMsgSent = async({sender_id})=>{

    console.log("get All Msg Sent - condition : "+ sender_id)
    const where = {}
    if (sender_id){
        where. sender_id =  sender_id;
    }
    // if (email){
    //     where.email = email;
    // }

    const messages = await MessageModel.findAll({atributes:['sender_id'],
    where:where});
    // const usuarios = await userModel.findAll({condition,email})
    console.log(" message Sent return :" +JSON.stringify(messages));
    return messages;
}

const getAllMsgReceived = async({recipient_id})=>{

    console.log("get All Msg Received - condition exceptions id_user: "+recipient_id)
    const where = {}
    if (recipient_id){
        where. recipient_id = recipient_id;
    }
    // if (email){
    //     where.email = email;
    // }

    const messages = await MessageModel.findAll({atributes:['recipient_id','message','created_at'],
    where:where});
    // const usuarios = await userModel.findAll({condition,email})
    console.log(" message received return :" +JSON.stringify(messages));
    return messages;
}

module.exports = {
    getAllService,
    createMessage,
    getAllMsgSent,
    getAllMsgReceived
}
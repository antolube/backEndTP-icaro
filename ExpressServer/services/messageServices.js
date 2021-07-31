const MessageModel = require('../models/messageModel');
// const error = require('../common/error');
// const exception = require('../common/exception');

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

const getAllMsgSenders = async({recipient_id})=>{

    console.log("getAllMsgSenders - condition : "+recipient_id)
    const where = {}
    if (recipient_id){
        where. recipient_id =  recipient_id;
    }
    // if (email){
    //     where.email = email;
    // }

    const message = await MessageModel.findAll({atributes:['recipient_id'],
    where:where});
    // const usuarios = await userModel.findAll({condition,email})
    console.log(" message return :" +message)
    return message;
}

const getAllMsgReceived = async({sender_id})=>{

    console.log("get All Msg Received - condition : "+sender_id)
    const where = {}
    if (sender_id){
        where. sender_id =  sender_id;
    }
    // if (email){
    //     where.email = email;
    // }

    const message = await MessageModel.findAll({atributes:['sender_id'],
    where:where});
    // const usuarios = await userModel.findAll({condition,email})
    console.log(" message return :" +message)
    return message;
}

module.exports = {
    createMessage,
    getAllMsgSenders,
    getAllMsgReceived
}
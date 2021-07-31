const MessageModel = require('../models/messageModel');
// const error = require('../common/error');
// const exception = require('../common/exception');

const createMessage = async ({message,sender_id,recipient_id}) => {
    // const {message,sender_id,recipient_id} = data
    console.log("Crear producto:"+ JSON.stringify({message,sender_id,recipient_id }));
    const data = {
        message: message,
        sender_id: sender_id,
        recipient_id:recipient_id,
        created_at: new Date(),
    }

    console.log("createMessage:"+ JSON.stringify(data));

    return await MessageModel.create(data);
}

module.exports = {
    createMessage
}
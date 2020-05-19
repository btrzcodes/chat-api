const MessageModel = require('./model');

function addMessage(message){
    const theMessage = new MessageModel(message);
    theMessage.save();   
}

async function getMessage(filterUser) {
    filterUser ? filter = {user: filterUser} : filter = {};
    return await MessageModel.find(filter);
}

async function updateText(id,message){
    const foundMessage = await MessageModel.findOne({
        _id: id
    });
    foundMessage.message = message;

    return await foundMessage.save();
}

function removeMessage(id) {
    return MessageModel.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    edit: updateText,
    remove: removeMessage
}
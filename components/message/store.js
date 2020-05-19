const MessageModel = require('./model');

function addMessage(message){
    const theMessage = new MessageModel(message);
    theMessage.save();   
}

async function getMessage(filterUser) {
    filterUser ? filter = {user: filterUser} : filter = {};

    // Uses promise instead of await to manage populated object. This will fail with data created before related objectId schema!
    return new Promise((resolve,reject) => {
        return MessageModel
            .find(filter)
            .populate('user')
            .exec( (error, populated) => {
                if (error) { reject(error) }
                resolve( populated )
            })
    })
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
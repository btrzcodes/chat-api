//const list = []; // is const because an array value can be edited with .push
const db = require('mongoose');
const DB_URL = process.env.DB_CLUSTER;
const MessageModel = require('./model');

db.Promise = global.Promise; // Instead using callbacks as default... use this mongo promise management.
db.connect(DB_URL, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true
});
console.info('DB connection ready!');

function addMessage(message){
    //list.push(message)
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
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

async function getMessage() {
    //return list;
    return allMessages = await MessageModel.find();
}

module.exports = {
    add: addMessage,
    list: getMessage
}
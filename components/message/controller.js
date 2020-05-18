const store = require('./store');

function addMessage(user, message) {
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            return reject('No user or message recieved')
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        };
        store.add(fullMessage);

        resolve(fullMessage);
    });   
}

function getMessages() {
    return new Promise((resolve,reject) => {
        resolve( store.list() );
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve,reject) => {
        if(!id || !message){
            reject('Invalid Data');
            return false;
        }
        resolve( await store.edit(id, message) ); 
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}
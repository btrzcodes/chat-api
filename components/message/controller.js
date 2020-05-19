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

function getMessages(filterUser) {
    return new Promise((resolve,reject) => {
        resolve( store.list(filterUser) );
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve,reject) => {
        if(!id || !message){
            reject('Invalid Data');
        }
        resolve( await store.edit(id, message) ); 
    })
}

function deleteMessage(id){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('Invalid ID');
        }
        store.remove(id)
            .then( deletedMessage => {
                resolve(deletedMessage);
            })
            .catch( err => {
                reject(err);
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}
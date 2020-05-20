const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(user, message, chat, file) {
    return new Promise( (resolve, reject) => {
        if(!user || !message || !chat ){
            return reject('Missing required info')
        }

        let fileUrl;
        file ? 
            fileUrl = ''+ file.filename
            : fileUrl = '';

        const fullMessage = {
            user,
            message,
            chat,
            date: new Date(),
            file: fileUrl
        };
        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

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
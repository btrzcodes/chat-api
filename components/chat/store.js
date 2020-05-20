const ChatModel = require('./model');
// TODO better manage mongo db .save() errors

async function addChat(chat){
    const theChat = new ChatModel(chat);
    return await theChat.save(); 
}

async function getChats(userId) {
    userId ? filter = {users: userId} : filter = {};
    return new Promise((resolve,reject) => {
        ChatModel
            .find(filter)
            .populate('users') // TODO: vas por aquí. Devuelve el objeto vacío en la respuesta... igual no he creado lo que tengo que crear realacionado?
            .exec( (error, populated) => {
                if (error) { reject(error) }
                resolve( populated )
            })
    })
}

module.exports = {
    add: addChat,
    list: getChats
}
const store = require('./store');
// TODO: better manage errors as now assumes db returns no err?
async function addChat(users) {
    if( !users || !Array.isArray(users) ){
        return Promise.reject('Invalid user list');
    }
    const chat = {users};
    return await store.add( chat );
}

async function getChats(userId) {
    return await store.list(userId);
}

module.exports = {
    addChat,
    getChats
}
const store = require('./store');

function addUser(name) {
    if(!name){
        return Promise.reject('No user name specified')
    }
    const user = {name};
    return Promise.resolve(store.add(user));
}

function getUsers(filterUser) {
    return Promise.resolve( store.list(filterUser) );
}

async function updateUser(id) {
    if(!id){
        return Promise.reject('No ID given');
    }
    return Promise.resolve( await store.edit(id) ); 
}

function deleteUser(id){
    if(!id){
        return Promise.reject('No ID given');
    }
    return Promise.resolve(store.remove(id));
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}
const store = require('./store');
// TODO: better manage errors as now assumes db returns no err?
async function addUser(name) {
     if(!name){
        return Promise.reject('No user name specified')
    }
    const user = {name};
    return await store.add( user)
    //await store.add(user)  
}

function getUsers(filterUser) {
    return Promise.resolve( store.list(filterUser) );
}

async function updateUser(id, user) {
    if(!id || !user ){
        return Promise.reject('Not enought info given');
    }
    return Promise.resolve( store.edit(id, user) ); 
}

function deleteUser(id){
    if(!id){
        return Promise.reject('No ID given');
    }
    return Promise.resolve( store.remove(id) );
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}
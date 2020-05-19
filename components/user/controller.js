const store = require('./store');

function addUser(name) {
        if(!name){
            return Promise.reject('No user name specified')
        }
        const user = {name};
        store.add(user);

        return Promise.resolve(user);
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
        store.remove(id)
            .then( deletedUser => {
                return Promise.resolve(deletedUser);
            })
            .catch( err => {
                return Promise.reject(err);
            })
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}
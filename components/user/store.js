const UserModel = require('./model');

function addUser(user){
    const theUser = new UserModel(user);
    theUser.save();   
}

async function getUser(filterUser) {
    filterUser ? filter = {user: filterUser} : filter = {};
    return await UserModel.find(filter);
}

async function updateUser(id,user){
    const foundUser = await UserModel.findOne({
        _id: id
    });
    foundUser.user = user;

    return await foundUser.save();
}

function removeUser(id) {
    return UserModel.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addUser,
    list: getUser,
    edit: updateUser,
    remove: removeUser
}
const UserModel = require('./model');
// TODO better manage mongo db .save() errors

async function addUser(user){
    const theUser = new UserModel(user);
    return await theUser.save(); 
}

async function getUser(filterUser) {
    filterUser ? filter = {user: filterUser} : filter = {};
    return await UserModel.find(filter);
}

async function updateUser(id,user){
    const foundUser = await UserModel.findOne({
        _id: id
    });
    foundUser.name = user;

    return foundUser.save();
}

async function removeUser(id) {
    return await UserModel.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addUser,
    list: getUser,
    edit: updateUser,
    remove: removeUser
}
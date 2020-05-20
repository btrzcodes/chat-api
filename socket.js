const socketIO = require('socket.io');
const socket = {};
// objects at JS are saved as reference, equivalent to C++ reference pointers
// so, when socket changes, it is going to be updated everwhere else.
function conect(server){
    socket.io = socketIO(server);
}

module.exports = {
    conect,
    socket
};
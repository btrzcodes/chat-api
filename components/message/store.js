const list = []; // is const because an array value can be edited with .push

function addMessage(message){
    list.push(message)
}

function getMessage() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage
}
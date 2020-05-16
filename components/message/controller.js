function addMessage(user, message) {
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            return reject('No user or message recieved')
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        };
        console.log(fullMessage);

        resolve(fullMessage);
    });
    
}

module.exports = {
    addMessage
}
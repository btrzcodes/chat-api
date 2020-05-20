const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function (server) {
    server.use('/message', message); // component name to avoid writting it allways at component url
    server.use('/user', user);
    server.use('/chat', chat);  
}

module.exports = routes
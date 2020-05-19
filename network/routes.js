const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');

const routes = function (server) {
    server.use('/message', message); // component name to avoid writting it allways at component url
    server.use('/user', user); 
}

module.exports = routes
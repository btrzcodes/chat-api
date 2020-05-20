const express = require('express');
const router = express.Router();

const controller = require('./controller')
const response = require('../../network/response');

router.post('/', function( req, res ) {
    const body = req.body;

    controller.addChat(body.users)
        .then( () => {
            response.success(req, res, `New chatroom with ${body.users.length} users created!`, 201, body);
        })
        .catch((err) => {
            response.error(req, res, 'User cannot be created', 400, err);
        });
});

router.get('/:userId', function( req, res ) {
    controller.getChats(req.params.userId)
        .then( (chatList) => {
            response.success(req, res, 'User chats correclty displayed', 200, chatList);
        })
        .catch((err) => {
            response.error(req, res, 'Unexpected error', 500, err);
        });
});

module.exports = router;
const express = require('express');
const router = express.Router();

const controller = require('./controller')
const response = require('../../network/response');

router.post('/', function( req, res ) {
    let body = req.body;

    controller.addMessage(body.user, body.message)
        .then( (fullMessage) => {
            response.success(req, res, 'Message correclty created', 201, body);
        })
        .catch((err) => {
            response.error(req, res, 'Message could not be created', 400, err);
        });
});

router.get('/', function( req, res ) {
    controller.getMessages()
        .then( (messagesList) => {
            response.success(req, res, 'Message correclty created', 201, messagesList);
        })
        .catch((err) => {
            response.error(req, res, 'Unexpected error', 500, err);
        });

    // res.header({
    //     "custom-header": "This is my custom header!"
    // })
    // response.success(req, res, 'Messages list');
});

router.delete('/', function( req, res ) {
    res.status(204).send();
});

module.exports = router;
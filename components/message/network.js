const express = require('express');
const multer = require('multer');

const router = express.Router();

const controller = require('./controller')
const response = require('../../network/response');

const upload = multer({
    dest: 'uploads/'
})

router.post('/', upload.single('file'), function( req, res ) {
    let body = req.body;

    controller.addMessage(body.user, body.message, body.chat)
        .then( (fullMessage) => {
            response.success(req, res, 'Message correclty created', 201, body);
        })
        .catch((err) => {
            response.error(req, res, 'Message could not be created', 400, err);
        });
});

router.get('/', function( req, res ) {
    const filterMessagesByUser = req.query.user || null;
    controller.getMessages(filterMessagesByUser)
        .then( (messagesList) => {
            response.success(req, res, 'Messages correclty displayed', 200, messagesList);
        })
        .catch((err) => {
            response.error(req, res, 'Unexpected error', 500, err);
        });
});

router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req,res, 'Internal error', 500, err)
        })
});

router.delete('/:id', function( req, res ) {
    controller.deleteMessage(req.params.id)
        .then( () => {
            response.success(req, res, `Message ${req.params.id} deleted!`, 204);
        })
        .catch( err => {
            response.error(req,res, 'Internal error while deleting', 500, err)
        })
});

module.exports = router;
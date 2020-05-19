const express = require('express');
const router = express.Router();

const controller = require('./controller')
const response = require('../../network/response');

router.post('/', function( req, res ) {
    const body = req.body;

    controller.addUser(body.user)
        .then( () => {
            response.success(req, res, `New user ${body.user} created!`, 201, body);
        })
        .catch((err) => {
            response.error(req, res, 'User cannot be created', 400, err);
        });
});

router.get('/', function( req, res ) {
    const filterUser = req.query.user || null;
    controller.getUsers(filterUser)
        .then( (usersList) => {
            response.success(req, res, 'Users correclty displayed', 200, usersList);
        })
        .catch((err) => {
            response.error(req, res, 'Unexpected error', 500, err);
        });
});

router.patch('/:id', function(req, res) {
    controller.updateUser(req.params.id, req.body.user)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req,res, 'Internal error', 500, err)
        })
});

router.delete('/:id', function( req, res ) {
    controller.deleteUser(req.params.id)
        .then( () => {
            response.success(req, res, `User ${req.params.id} deleted!`, 204);
        })
        .catch( err => {
            response.error(req,res, 'Internal error while deleting', 500, err)
        })
});

module.exports = router;
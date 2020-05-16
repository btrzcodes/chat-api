const express = require('express');
const router = express.Router();

const response = require('../../network/response');


router.get('/', function( req, res ) {
    res.header({
        "custom-header": "This is my custom header!"
    })
    response.success(req, res, 'Messages list');
});

router.post('/', function( req, res ) {
    if( !req.query.error ) {
        response.success(req, res, 'Message correclty created', 201);
    } else {
        response.error(req, res, 'Message could not be created', 500, 'Internal error reason');
    }
});

router.delete('/', function( req, res ) {
    res.status(204).send();
});

module.exports = router;
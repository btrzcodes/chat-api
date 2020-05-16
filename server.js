const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

const app = express();
app.use(router);
app.use(bodyParser.json()); // Cant send full parser, but specific method. Sets content-types, it can be .urlenconded(extended:false) to send it as form
app.use('/app', express.static('public'));

router.get('/message', function( req, res ) {
    //console.info(req.headers);
    res.header({
        "custom-header": "This is my custom header!"
    })
    // res.send('Messages list');
    response.success(req, res, 'Messages list');
});

router.post('/message', function( req, res ) {
    // res.status(201).send({
    //     errors:'', 
    //     message:'Message correclty created'
    // });
    if( !req.query.error ) {
        response.success(req, res, 'Message correclty created', 201);
    } else {
        response.error(req, res, 'Message could not be created', 500, 'Internal error reason');
    }
});

router.delete('/message', function( req, res ) {
    //console.info(req.query);
    // res.send('Message "'+req.body.text+'" deleted');
    res.status(204).send(); // As returning no content
});

app.listen(3000);
console.info('App is listening at port 3000'); 
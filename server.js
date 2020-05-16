const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json()); // Cant send full parser, but specific method. Sets content-types, it can be .urlenconded(extended:false) to send it as form
app.use(router);

router.get('/message', function( req, res ) {
    console.info(req.headers);
    res.header({
        "custom-header": "This is my custom header!"
    })
    res.send('Messages list');
});

router.post('/message', function( req, res ) {
    res.status(201).send({
        errors:'', 
        message:'Message correclty created'
    });
});

router.delete('/message', function( req, res ) {
    //console.info(req.query);
    // res.send('Message "'+req.body.text+'" deleted');
    res.status(204).send(); // As returning no content
});

app.listen(3000);
console.info('App is listening at port 3000'); 
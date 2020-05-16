const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json()); // Cant send full parser, but specific method. Sets content-types, it can be .urlenconded(extended:false) to send it as form
app.use(router);

router.get('/message', function( req, res ) {
    res.send('Messages list');
});

router.delete('/message', function( req, res ) {
    //console.info(req.query);
    console.info(req.body);
    res.send('Message "'+req.body.text+'" deleted');
});

app.listen(3000);
console.info('App is listening at port 3000'); 
const express = require('express');
const app = express();
const router = express.Router();

app.use(router);

router.get('/', function( req, res ) {
    res.send('Eo!')
});

app.listen(3000);
console.info('App is listening at port 3000');
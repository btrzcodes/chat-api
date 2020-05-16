const express = require('express');

const app = express();

app.use('/', function( req, res ) {
    res.send('Eo!')
});
    
app.listen(3000);
console.info('App is listening at port 3000');
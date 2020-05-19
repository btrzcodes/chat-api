const express = require('express');
const bodyParser = require('body-parser');
//const util = require('util')

const dotenv = require('dotenv');
dotenv.config();

const db = require('./db');
//console.log(util.inspect(dbConnection, false, null, true))
db.dbConnection();

const router = require('./network/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router(app);

app.use('/app', express.static('public'));



app.listen(3000);
console.info('App is listening at port 3000'); 
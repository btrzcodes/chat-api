const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const router = require('./network/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router(app);

app.use('/app', express.static('public'));



app.listen(3000);
console.info('App is listening at port 3000'); 
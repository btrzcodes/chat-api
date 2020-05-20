const express = require('express');
const app = express();
const server = require('http').Server(app);

const router = require('./network/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
//const util = require('util')
const dotenv = require('dotenv');
dotenv.config(); // This must be before db const because else crashes (needs url param from here to set db)
const db = require('./db');


//console.log(util.inspect(dbConnection, false, null, true))
db.dbConnection();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

socket.conect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.info('App is listening at port 3000'); 
});

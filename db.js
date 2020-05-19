const db = require('mongoose');
const DB_URL = process.env.DB_CLUSTER;

db.Promise = global.Promise; // Setting Promises. Instead using callbacks as default... use this mongo promise management.

async function dbConnection() { // Choose when we want db conection
    await db.connect(DB_URL, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    
    console.info('DB connection ready!');
} 

function lalala() {
    console.warn('This is lalala!');
}

module.exports = {
    lalala,
    dbConnection
}

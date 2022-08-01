const mongoose = require('mongoose');
const DB = require('../config/database');

const URL = DB.LIVE.SRC + DB.LIVE.username + ":" + DB.LIVE.password + "@" + DB.LIVE.cluster + DB.LIVE.query

// Configuration
mongoose.connect(URL, {
	dbName: DB.LIVE.name
});

mongoose.connection.on('connected', () => {
	console.log(`Mongodb live connection open at: ${DB.LIVE.name}`);
});

// error
// disconnected
const mongoose = require('mongoose');
const Constants = require('../constant');

const URL = Constants.DB.SRC + Constants.DB.Host + ":" + String(Constants.DB.Port) + "/" + Constants.DB.name

mongoose.connect(URL);
mongoose.connection.on('connected', () => {
	console.log(`Mongoose default connection open at: ${URL}`);
});

// error
// disconnected
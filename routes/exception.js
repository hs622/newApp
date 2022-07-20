const express = require('express');
const router = express.Router();
const Constants = require('../constant');
	
router.get('*', (request, response) => {
	response.status(Constants.Status.NotFound)
		.send("URL not exists.")
		.end();
})

module.exports = router;
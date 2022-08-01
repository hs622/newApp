module.exports = {

	// local - configuration
	LOCAL: {
		SRC				: "mongodb://",
		Host			: "localhost",
		Port			: 27017,
		Username	: "admin",
		Password	: "oxr2dOqDXxU2gD3Y",
		name			: "new_app_db",
	},


	// LIVE - configuration
	LIVE: {
		SRC				: "mongodb+srv://",
		Host			: "localhost",
		Port			: 27017,
		username	: "admin",
		password	: "oxr2dOqDXxU2gD3Y",
		cluster   : "0347-pak-khi",
		name			: "0347-pak-khi",
		query			: ".g4pnnau.mongodb.net/?retryWrites=true&w=majority"
	}
	
}
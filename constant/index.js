module.exports = {
	Status: {
		OK 									: 200,
		Created 						: 201,
		BadRequest					: 400,
		Forbidden						: 403,
		NotFound 						: 404,
		Unauthorized				: 401,
		UnprocessableEntity : 422,
		InternalServerError : 500,
	},
		
	DB: {
		LOCAL: {
			SRC				: "mongodb://",
			Host			: "localhost",
			Port			: 27017,
			Username	: "admin",
			Password	: "oxr2dOqDXxU2gD3Y",
			name			: "new_app_db",
		},
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
	},

	JWT: {
		JWT_SECRET : "asdasd"
	},

	MAIL: {
		SMTP: {
			HOST: "smtp.gmail.com",
			PORT: 465,
			SECURE: true,
			AUTH: {
				USER: "",
				PASSWORD: ""
			}
		}
	}
}
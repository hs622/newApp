module.exports = {
	Status: {
		"OK" 									: 200,
		"Created" 						: 201,
		"BadRequest"					: 400,
		"Forbidden"						: 403,
		"NotFound" 						: 404,
		"Unauthorized"				: 401,
		"UnprocessableEntity" : 422,
		"InternalServerError" : 500,
	},

	DB: {
		"SRC"				: "mongodb://",
		"Host"			: "localhost",
		"Port"			: 27017,
		"Username"	: null,
		"Password"	: null,
		"name"			: "new_app_db",
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
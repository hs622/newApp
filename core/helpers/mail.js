const NodeMail = require("nodemailer");
const constant = require("../../constant");

class Mail extends NodeMail {

	constructor(value) {
		super(value);

	}

	// Methods
	getHost() {
		return constant.MAIL.SMTP.HOST;
	}

	getPORT() {
		return constant.MAIL.SMTP.PORT;
	}

	getSystemEmail() {
		return constant.MAIL.SMTP.AUTH.USER;
	}
}

module.exports = Mail;




// module.exports = () => {

// 	if(constant.MAIL.SMTP.HOST && constant.MAIL.SMTP.PORT && constant.MAIL.SMTP.SECURE && constant.MAIL.SMTP.AUTH.USER && constant.MAIL.SMTP.AUTH.PASSWORD != undefined) {
// 		return Mail.createTransport({
// 			host: constant.MAIL.SMTP.HOST,
// 			port: constant.MAIL.SMTP.PORT,
// 			secure: constant.MAIL.SMTP.SECURE,
// 			auth: {
// 					user: constant.MAIL.SMTP.AUTH.USER,
// 					pass: constant.MAIL.SMTP.AUTH.PASSWORD
// 			}
// 		})
// 	} else {
// 		return Error.
// 	}
// };
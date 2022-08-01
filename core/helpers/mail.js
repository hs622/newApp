const NodeMail = require("nodemailer");
const constant = require("../../constant");

getHost = () => {
	const value = constant.MAIL.SMTP.HOST;
	if(value.length == 0) 
		throw new Error('Mail host is not set.')
	else value;
}

getPort = () => {
	const value = constant.MAIL.SMTP.PORT;
	if(value.length == 0) 
		throw new Error('Mail port is not set.') 
	else value;
}

getSystemEmail = () => {
	const value = constant.MAIL.SMTP.AUTH.USER;
	if(value.length == 0)
		throw new Error('System Email is not set.') 
	else value;
}

function mail() {

		this.getHost();
		this.getPort();
		this.getSystemEmail();

		NodeMail.createTransport({
			host: constant.MAIL.SMTP.HOST,
			port: constant.MAIL.SMTP.PORT,
			secure: constant.MAIL.SMTP.SECURE,
			auth: {
				user: constant.MAIL.SMTP.AUTH.USER,
				pass: constant.MAIL.SMTP.AUTH.PASSWORD
			}
		})
};


module.exports = {
	getHost,
	getPort,
	getSystemEmail,
	mail,
};
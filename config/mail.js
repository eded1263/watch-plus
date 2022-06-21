const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.NODEMAILER_MAIL,
		pass: process.env.NODEMAILER_PASS,
	},
});

module.exports = transporter;

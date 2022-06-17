const bodyParser = require("body-parser");
const express = require("express");
class AppController {
	app;

	constructor(app, controllers) {
		this.app = app;
		this.setup();
		this.startRouters(controllers);
		this.setErrorMiddleware();
	}

	setup() {
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use("/public", express.static("public"));
	}

	startRouters(controllers) {
		controllers.forEach((controller) => {
			this.app.use(controller.getRouter());
		});
	}

	startServer() {
		this.app.listen(3000, () => {
			console.log("Listening on 3000");
		});
	}

	setErrorMiddleware() {
		this.app.use((_req, res) => {
			res.redirect("/");
		});
	}
}

module.exports = {
	AppController,
};

const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class HomeController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/", this.serveHome);
	}

	serveHome(_req, res) {
		res.sendFile(mountPath("controllers/Home/view/index.html"));
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	HomeController,
};

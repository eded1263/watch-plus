const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class GoogleController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/google81d983010e99828d.html", this.serveGoogleFile);
	}

	serveGoogleFile(_req, res) {
		res.sendFile(
			mountPath("controllers/Google/view/google81d983010e99828d.html")
		);
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	GoogleController,
};

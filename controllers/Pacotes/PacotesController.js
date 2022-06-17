const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class PacotesController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/pacotes", this.servePacotes);
	}

	servePacotes(_req, res) {
		res.sendFile(mountPath("controllers/Pacotes/view/pacotes.html"));
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	PacotesController,
};

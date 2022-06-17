const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class FilmesController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/filmes-e-series", this.servePacotes);
	}

	servePacotes(_req, res) {
		res.sendFile(mountPath("controllers/Filmes/view/filmes-e-series.html"));
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	FilmesController,
};

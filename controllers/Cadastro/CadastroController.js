const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class CadastroController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/cadastre-se", this.serveCadastro);
	}

	serveCadastro(_req, res) {
		res.sendFile(mountPath("controllers/Cadastro/view/cadastre-se.html"));
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	CadastroController,
};

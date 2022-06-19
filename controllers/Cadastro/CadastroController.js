const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class CadastroController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/cadastre-se", this.serveCadastro);
		this._router.post("/cadastre-se", this.sendCadastro);
	}

	serveCadastro(_req, res) {
		res.sendFile(mountPath("controllers/Cadastro/view/cadastre-se.html"));
	}

	sendCadastro(req, res) {
		// TODO: Enviar email
		res.json(req.body);
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	CadastroController,
};

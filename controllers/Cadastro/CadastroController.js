const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
const transporter = require("../../config/mail");
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

	async sendCadastro(req, res) {
		const mailOptions = {
			from: req.body.email,
			to: "aula.teste.edilson@gmail.com",
			subject: "Submissão de Formulário",
			html: `
				<p>Nome: ${req.body.nome} ${req.body.sobrenome} </p>
				<p>Email: ${req.body.email} </p>
				<p>Telefone: ${req.body.telefone} </p>
				<p>CPF: ${req.body.cpf} </p>
				<p>Plano: ${req.body.plano} </p>
			`,
		};
		await transporter.sendMail(mailOptions);
		res.json(req.body);
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	CadastroController,
};

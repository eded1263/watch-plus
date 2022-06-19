require("dotenv").config({ path: __dirname + "/.env" });
const app = require("express")();
const { HomeController } = require("./controllers/Home/HomeController");
const { GoogleController } = require("./controllers/Google/GoogleController");
const { FilmesController } = require("./controllers/Filmes/FilmesController");
const {
	PacotesController,
} = require("./controllers/Pacotes/PacotesController");
const {
	CadastroController,
} = require("./controllers/Cadastro/CadastroController");
const { AppController } = require("./controllers/App/AppController");

const appController = new AppController(app, [
	new HomeController(),
	new CadastroController(),
	new PacotesController(),
	new FilmesController(),
	new GoogleController(),
]);

appController.startServer(process.env.PORT);

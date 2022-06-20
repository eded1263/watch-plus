const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class SeoController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/sitemap.xml", this.serveSiteMap);
		this._router.get("/robots.txt", this.serveRobotsTxt);
	}

	serveSiteMap(_req, res) {
		res.sendFile(mountPath("controllers/Seo/view/sitemap.xml"));
	}

	serveRobotsTxt(_req, res) {
		res.sendFile(mountPath("controllers/Seo/view/robots.txt"));
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	SeoController,
};

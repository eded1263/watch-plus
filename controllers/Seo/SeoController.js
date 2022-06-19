const { Router } = require("express");
const mountPath = require("../../utils/mountPath");
class SeoController {
	_router = new Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes() {
		this._router.get("/sitemap.xml", this.serveSiteMap);
	}

	serveSiteMap(_req, res) {
		res.sendFile(mountPath("controllers/Seo/view/sitemap.xml"));
	}

	getRouter() {
		return this._router;
	}
}

module.exports = {
	SeoController,
};

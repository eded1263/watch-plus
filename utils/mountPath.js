const path = require("path");

module.exports = (filePath) => {
	return path.join(__dirname, "../", filePath);
};

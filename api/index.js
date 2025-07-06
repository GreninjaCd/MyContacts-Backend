const app = require("../server"); // if server.js is in root
module.exports = (req, res) => {
  app(req, res);
};

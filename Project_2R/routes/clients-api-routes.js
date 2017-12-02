
var db = require("../models");

module.exports = function(app) {

  app.get("/api/client", function(req, res) {
    db.Clients.findAll({}).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.post("/api/client", function(req, res) {
    db.Clients.create(req.body).then(function(dbClients) {
      res.json(dbClients);
    });
  });

};

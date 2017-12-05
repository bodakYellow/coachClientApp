
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

  app.get("/client/:clientID", function (req, res) {

    db.Clients.findOne({
      where: {
        id: req.params.clientID
      },
      include: [db.Trainers]
    }).then(function (clientData) {
      res.json(clientData)
    });
  });

};//end of export

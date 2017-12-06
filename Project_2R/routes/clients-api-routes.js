
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

// match client to trainer based on activity
  app.get("/api/matchClientToTrainer/:activity", function (req, res) {
    console.log(req.params.activity)
    db.Trainers.findOne({
      where: {
        activity: req.params.activity
      }
    })
    .then(function(trainerMatch){
      res.send(trainerMatch)
    })
  });//end of app.get



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

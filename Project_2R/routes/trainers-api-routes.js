
var db = require("../models");

module.exports = function(app) {

  app.get("/api/trainer", function(req, res) {
    db.Trainers.findAll({}).then(function(dbTrainers) {
      res.json(dbTrainers);
    });
  });

  app.post("/api/trainer", function(req, res) {
    db.Trainers.create(req.body).then(function(dbTrainers) {
      res.json(dbTrainers);
    });
  });
};

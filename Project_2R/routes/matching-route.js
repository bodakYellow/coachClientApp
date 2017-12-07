
var db = require("../models");

module.exports = function (app) {

  app.get("/api/loginToTrainerDB/:activity", function (req, res) {
    console.log(req.params)
    db.Trainers.findOne({
      where: {
        activity: req.params.activity
      }
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.get("/api/loginToClientDB/:activity", function (req, res) {
    console.log(req.params)
    db.Clients.findOne({
      where: {
        activity: req.params.activity
      }
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });

  });


};
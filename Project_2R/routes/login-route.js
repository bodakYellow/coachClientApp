
var db = require("../models");

module.exports = function(app) {
  app.get("/api/loginToTrainerDB/:email", function(req, res) {
    console.log(req.params)
    db.Trainers.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(result){
      console.log(result);
      res.json(result);
    });
  });

  app.get("/api/loginToClientDB/:email", function(req, res) {
    console.log(req.params)
    db.Clients.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(result){
      console.log(result);
      res.json(result);
    });

  });



}; //end of exports





  // app.get("/loginToTrainerDB", function(req, res) {



  //   db.Trainers.findOne({
  //     where: {
  //       email: req.body.email;
  //     },
  //     include: [db.Clients]
  //   }).then(function(result){
  //     console.log(result);
  //     res.json(result);
  //   });

  // });

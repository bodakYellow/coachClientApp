
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


// app.get("/trainer/:trainerID/client", function(req, res){

//   db.Trainers.findAll({
//     where: {
//       id: req.params.trainerID
//     },
//     include: [db.Clients]
//   }).then(function(clientlist){
//     res.json(clientlist)
//   });
// });





}; //end of exports



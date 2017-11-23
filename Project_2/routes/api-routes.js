
var db = require("../models");

module.exports = function(app) {

//probably should have one for trainer as well
  app.get("/api/client", function(req, res) {
    db.clientTrainer.findAll({}).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });


  app.post("/api/clientTrainer", function(req, res) {
    db.clientTrainer.create({
      column1: req.body.column1,
      column2: req.body.column2
    }).then(function(dbTodo) {

      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // // req.params.id
  // app.delete("/api/todos/:id", function(req, res) {
  //   // We just have to specify which todo we want to destroy with "where"
  //   db.Todo.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbTodo) {
  //     res.json(dbTodo);
  //   });

  // });

  // PUT route for updating todos. We can get the updated todo data from req.body
  // app.put("/api/todos", function(req, res) {
  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   db.Todo.update({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbTodo) {
  //     res.json(dbTodo);
  //   });
  // });

};

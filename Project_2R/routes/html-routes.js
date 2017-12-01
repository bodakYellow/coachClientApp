var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/index.html"));
  });

   app.get("/profile-client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-client.html"));
  });

  app.get("/profile-trainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-trainer.html"));
  });

  app.get("/signup-client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup-client.html"));
  });

  app.get("/signup-trainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup-trainer.html"));
  });

  app.get("/template-nav", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/template-nav.html"));
  });



//----------trainer pages below

  app.get("/newOrExistingTrainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newOrExistingTrainer.html"));
  });



};

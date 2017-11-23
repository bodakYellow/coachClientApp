var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/index.html"));
  });

   app.get("/signIn", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signIn.html"));
  });

  app.get("/createClient", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createClient.html"));
  });

  app.get("/locTimeClient", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/locTimeClient.html"));
  });

  app.get("/confirmClient", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/confirmClient.html"));
  });

//----------trainer pages below

  app.get("/newOrExistingTrainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newOrExistingTrainer.html"));
  });

  app.get("/createTrainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createTrainer.html"));
  });

  app.get("/signInTrainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signInTrainer.html"));
  });

  app.get("/apptsForTrainer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/apptsForTrainer.html"));
  });


};

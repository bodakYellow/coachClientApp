
$("#add-client").on("click", function () {
  event.preventDefault();

  // var grabActivity = $("#activity").val();
  var grabActivity = $("#activity option:selected").val()
  //taking activity input, sending it to clients-api-routes.js to do user matching

  $.get("/api/matchClientToTrainer/" + grabActivity)
    .then(function (data) {
      console.log(data)

      console.log(data.id)

      var newClient = {
        name: $("#username").val(),
        password: $("#password").val(),
        email: $("#email").val(),
        goal: $("#goal").val(),
        location: $("#location").val(),
        time: $("#time").val(),
        // activity: $("#activity").val(),
        activity: $("#activity option:selected").val(),
        TrainerId: data.id
      };


      $.post("/api/client", newClient)
        .done(function (newClientInfo) {
          console.log(newClientInfo);

          //open new window with results
          $.get("/api/loginToClientDB/" + newClient.email)
            .done(function (clientInfo) {
              console.log(clientInfo);
              localStorage.setItem("clientID", clientInfo.id);
              window.location.href = "/profile-client";
            });

        }); //post request ends
    })//get request ends


}) // end of function










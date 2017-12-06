

$("#add-client").on("click", function (){
  event.preventDefault();

  var grabActivity = $("#activity").val();
//taking activity input, sending it to clients-api-routes.js to do user matching

$.get("/api/matchClientToTrainer/" + grabActivity)
  .then(function(data){
    console.log(data)
  
    console.log(data.id)

    var newClient = {
      name: $("#username").val(),
      password: $("#password").val(),
      email: $("#email").val(),
      goal: $("#goal").val(),
      location: $("#location").val(),
      time: $("#time").val(),
      activity: $("#activity").val(),
      TrainerId: data.id
    };


    $.post("/api/client", newClient)
        .done(function(newClientInfo) {
          console.log(newClientInfo);



          $.get("/api/loginToClientDB/" + newClient.email)
            .done(function (clientInfo) {
              console.log(clientInfo);
              localStorage.setItem("clientID", clientInfo.id);
              window.location.href = "/profile-client";
            });


          // window.location.href= "/profile-client";
        }); //post request ends
  })//get request ends


}) // end of function











// loop through Trainer database activity
//if $("#activity").val() === trainer activity, then append that
//trainer to confirmation page

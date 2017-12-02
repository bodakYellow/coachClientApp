
$("#add-trainer").on("click", function (event){
  event.preventDefault();
  var newTrainer = {
    name: $("#trainer-username").val(),
    password: $("#trainer-password").val(),
    email: $("#trainer-email").val(),
    goal: $("#trainer-goal").val(),
    location: $("#trainer-location").val(),
    time: $("#trainer-time").val(),
    activity: $("#trainer-activity").val()
  };
  console.log(newTrainer);

  $.post("/api/trainer", newTrainer)
  .done(function(data) {
    console.log(data);
    window.location.href= "/template-nav";
  });
})

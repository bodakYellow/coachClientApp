  // //add a defaulted list of trainers
  // var defaultTrainer = {
  //   name: "Kevin",
  //   password: "whatever",
  //   email: "kevin@gmail.com",
  //   goal: "none",
  //   location: "San Francisco",
  //   time: "0900",
  //   activity: "swimming"
  // };
  // console.log(defaultTrainer);

  // $.post("/api/trainer", defaultTrainer)
  // .done(function(data) {
  // console.log(data);
  // });


  $("#add-trainer").on("click", function (event){
    event.preventDefault();
    var newTrainer = {
      name: $("#trainer-username").val(),
      password: $("#trainer-password").val(),
      email: $("#trainer-email").val(),
      goal: $("#trainer-goal").val(),
      location: $("#trainer-location").val(),
      time: $("#trainer-time").val(),
      activity: $(".trainer-activity").attr('data-activity')
    };
    console.log(newTrainer.activity);

    $.post("/api/trainer", newTrainer)
    .done(function(data) {
      console.log(data);
      $.get("/api/loginToTrainerDB/" + newTrainer.email)
        .done(function (clientInfo) {
          console.log(clientInfo);
          localStorage.setItem("trainerID", data.id);
          window.location.href = "/profile-trainer";
          
        });//end of get
    });//end of post
  });//end of function


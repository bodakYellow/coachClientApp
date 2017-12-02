
$("#add-client").on("click", function (){
  event.preventDefault();
  var newClient = {
    name: $("#username").val(),
    password: $("#password").val(),
    email: $("#email").val(),
    goal: $("#goal").val()
  };
console.log(newClient);

$.post("/api/client", newClient)
.done(function(data) {
  console.log(data);
});

newClient = {
  name: $("#username").val(""),
  password: $("#password").val(""),
  email: $("#email").val(""),
  goal: $("#goal").val("")
};

window.location.href= "/profile-client";

})



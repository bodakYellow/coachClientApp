
$("#add-client").on("click", function (){
  event.preventDefault();
  var newClient = {
    name: $("#username").val(),
    password: $("#password").val(),
    email: $("#email").val(),
    goal: $("#goal").val(),
    location: $("#location").val(),
    time: $("#time").val(),
    activity: $("#activity").val()
  };
console.log(newClient);

$.post("/api/client", newClient)
.done(function(data) {
  console.log(data);
  window.location.href= "/template-nav";
});

})

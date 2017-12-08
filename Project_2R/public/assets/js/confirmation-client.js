
// Share your event

function loadEvents() {
    var mailString;
    var clientEmail = localStorage.getItem("clientEmail")
    var trainerName = localStorage.getItem("trainerName")
    var selectedTime = localStorage.getItem("selectedTime")
    var location = localStorage.getItem("location")
    console.log(clientEmail)
    console.log(trainerName)
    console.log(selectedTime)
    console.log(location)

  mailString = '?subject=Training session with Kevin&body=Dear Stella, You will have a swimming session on Dec 8, 2018 09: 00with Kevin. Thanks for signing up with FitTrain!';
  //
  $('#mail-link').attr('href',  'mailto: stellaulw@gmail.com' + mailString);

}

loadEvents();

// encodeURIComponent($(clientEmail).val())

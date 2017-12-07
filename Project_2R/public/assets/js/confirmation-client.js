
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

  mailString = '?subject=Training session with' + encodeURIComponent($(trainerName).val())
      + '&body=You will have a training session on ' + encodeURIComponent($(selectedTime).val())
      + 'at '+ encodeURIComponent($(location).val());
  //
  $('#mail-link').attr('href',  'mailto:' + encodeURIComponent($(clientEmail).val())+ mailString);

}
loadEvents();



//Add event to calendar

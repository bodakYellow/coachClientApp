function getClientInfo() {
    console.log(localStorage.getItem("clientID"));
    var clientID = localStorage.getItem("clientID")
    $.get("/client/" + clientID)
        .done(function (data) {
            console.log(data);
            localStorage.setItem("clientEmail", data.email)
            localStorage.setItem("trainerName", data.Trainer.name)
            localStorage.setItem("selectedTime", data.time)
            localStorage.setItem("location", data.location)
            console.log(data.name);
            $('#client-name').append(`${data.name}`)
            $('#goal').append(`${data.goal}`)
            $('#trainer-name').append(`${data.Trainer.name}`)
            $('#activity').append(`${data.activity}`)



        });
};

getClientInfo();

$('#logout').on('click', function (event) {
    event.preventDefault();
    window.localStorage.clear();
    window.location.href = "/";
})

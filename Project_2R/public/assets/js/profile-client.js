function getClientInfo() {
    console.log(localStorage.getItem("clientID"));
    var clientID = localStorage.getItem("clientID")
    $.get("/client/" + clientID)
        .done(function (data) {
            console.log(data);
            console.log(data.name);
            $('#client-name').append(`Welcome ${data.name}`)
            $('#goal').append(`We are here to you accomplished your goal of ${data.goal}`)
            $('#trainer').append(`Your trainer ${data.Trainer.name} is an expert at ${data.activity}`)
            $('#time').append(`Your appointment has been schedule for ${data.time}`)
            $('#location').append(`Please meet them at ${data.location}`)

        });
};

getClientInfo();
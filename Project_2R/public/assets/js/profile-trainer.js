function getTrainerInfo() {
    console.log(localStorage.getItem("trainerID"));
    var trainerID = localStorage.getItem("trainerID")
    $.get("/trainer/" + trainerID)
        .done(function (data) {

            console.log(data);
            //js to inject the results here 
         
        });
};

getTrainerInfo();









//Test 
// function getTrainerInfo() {
//     $.get("/trainer/" + "1")
//         .done(function (data) {

//             console.log(data);

//         });
// };
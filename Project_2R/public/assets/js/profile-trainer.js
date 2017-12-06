function getTrainerInfo() {
    console.log(localStorage.getItem("trainerID"));
    var trainerID = localStorage.getItem("trainerID")
    $.get("/trainer/" + trainerID)
        .done(function (data) {

            console.log(data);
            //js to inject the results here 
            console.log(data.Clients.length)

            for (var i = 0; i < data.Clients.length; i++) {
            	$("#clientSchedule").append(   

            		`<tr>
			            <td>${data.Clients[i].name}</td>
			            <td>${data.Clients[i].location}</td>
			            <td>${data.Clients[i].time}</td>
			            <td>${data.Clients[i].goal}</td>
			        </tr>`
            	)
            }
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
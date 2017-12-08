$(document).ready(function () {
			$("#login-button").on("click", function () {
				event.preventDefault();
				var email = $("#email-input").val().trim();
				// console.log("hi testing")

				if ($("#clientRadio").is(":checked")) {
					//client logic for finding email here
					// console.log(email + " hi client radio checked")
					$.get("/api/loginToClientDB/" + email)
						.done(function (data) {
							console.log(data);
							localStorage.setItem("clientID", data.id);
							window.location.href = "/profile-client";
						});
				} else if ($("#trainerRadio").is(":checked")) {
					// console.log("trainer radio checked" + email)

					$.get("/api/loginToTrainerDB/" + email)
						.done(function (data) {
							console.log(data);
							// Storing the trainer id in local storage for profile get request
							localStorage.setItem("trainerID", data.id);
							// localStorage.setItem("lastname", "Smith")
							console.log(data.id);
							window.location.href = "/profile-trainer";

						});
				}
			})

		})


			// 			var trainerID = ""

			// $.post("/trainer/" + trainerID + "/clients", email)

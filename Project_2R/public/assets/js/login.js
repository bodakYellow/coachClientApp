$(document).ready(function () {
			$("#login-button").on("click", function () {
				event.preventDefault();
				var email = $("#email-input").val().trim();
				console.log("hi testing")

				if ($("#clientRadio").is(":checked")) {
					//client logic for finding email here
					console.log(email + " hi client radio checked")
					$.get("/api/loginToClientDB/" + email)
						.done(function (data) {
							$("#email-input").val("")
							console.log(data);
						});
				} else if ($("#trainerRadio").is(":checked")) {
					console.log("trainer radio checked" + email)

					$.get("/api/loginToTrainerDB/" + email)
						.done(function (data) {
							$("#email-input").val("")
							console.log(data);
						});
				}
			})

		})


			// 			var trainerID = ""

			// $.post("/trainer/" + trainerID + "/clients", email)
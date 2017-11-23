 $(document).ready(function(){

    $("form").submit(function(){
        event.preventDefault();

        var newTime = ""

        var dateInput = $("#dateInput").val().trim();
        newTime += "On "+ dateInput;
        var startTimeInput = $("#startTimeInput").val().trim();
        newTime += " from " +  startTimeInput;
        var endTimeInput = $("#endTimeInput").val().trim();
        newTime += " to " + endTimeInput;

        alert(newTime);


        // posty posty post request to sql here probably
        


        //empty out input box after submit by replacing with empty string
        $("#dateInput").val("");
        $("#startTimeInput").val("");
        $("#endTimeInput").val("");
        

        
    });
    })
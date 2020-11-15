$(document).ready(function(){
    // moments.js current day and time
    $ ("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //event listener for save button and to store users input into local storage
    $ (".saveBtn").on("click",function(){
        // get data inputed by user and time for current time block used 
        var inputText= $(this).siblings(".description").val();
        var inputTime= $(this).parent().attr("id");
        //set info into local storage
        localStorage.setItem(inputTime,inputText);
        console.log(this);

    })

    // get info from local storage and save it in to the .description <texarea> for the chosen time block
    if (localStorage.getItem("hour9")){
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    }
    if (localStorage.getItem("hour10")){
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    }
    if (localStorage.getItem("hour11")){
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    }
    if (localStorage.getItem("hour12")){
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    }
    if (localStorage.getItem("hour1")){
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    }
    if (localStorage.getItem("hour2")){
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    }
    if (localStorage.getItem("hour3")){
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    }
    if (localStorage.getItem("hour4")){
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    }
    if (localStorage.getItem("hour5")){
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    }

 

    // checks current time
    var currentTime= moment().format('h:mm:a');
    console.log(moment().format('h:mm:a'))
    
    // function for changing color and class to past, present, or future depending on the current time
    $(".row").each(function(){
        var currentHour = $(this).attr("id");

        if (currentTime>currentHour){
            $(this).addClass("past");
        }
        else if (currentTime===currentHour){
            $(this).addClass("present");

        }
        else {
            $(this).addClass("future");
            
        };
    
    }); 
});
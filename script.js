$(document).ready(function () {
    var saveBtn = ".saveBtn";
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do YYYY"));

    $(".saveBtn").on("click", function () {
        var textValue = $(this).siblings(".description").val();
        var timeKey = $(this).parent().attr("id");
            localStorage.setItem(timeKey, textValue);
})
})

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
$("#21 .description").val(localStorage.getItem("21"));



function cssUpdate () {
   var currentHour = moment().hour();
   $(".time-block").each(function () {
       var divTimeId = parseInt($(this).attr("id").split("hour")[1]);
        console.log(divTimeId, currentHour);
       if (divTimeId < currentHour) {
           $(this).removeClass("present");
           $(this).removeClass("future");
           $(this).addClass("past");
       } else if (divTimeId === currentHour) {
           $(this).removeClass("past");
           $(this).removeClass("future");
           $(this).addClass("present");
       } else if (divTimeId > currentHour) {
           $(this).removeClass("past");
           $(this).removeClass("present");
           $(this).addClass("future");
       }
   })
}

cssUpdate ();


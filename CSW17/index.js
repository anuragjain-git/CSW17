$(".btn").click(function () {

    var y = $("#input").val();

    if((y%400 == 0) || (y%4 == 0)) {
        $("#message").text("Yes, "+y+" is a leap Year.");
     }
     else {
        $("#message").text(y+" is not a leap Year.");
     }
 });
 
    
    
$(".btn").click(function () {
    
    var w = $("#w").val();
    var h = $("#h").val();

    var bmi =((1.3 * w) / Math.pow(h,2.5));
        $("#message").text("BMI is "+bmi);

    if (bmi<18.8) {
        $("#health").text("Underweight");
    }
    else if ((bmi>18.8)&&(bmi<=25)) {
        $("#health").text("Healthy");
    }
    else if ((bmi>25)&&(bmi<=30)) {
        $("#health").text("OverWeight");
    }
    else if ((bmi>30)&&(bmi<=40)) {
        $("#health").text("Obese");
    }
    else {
        $("#health").text("Morbidly Obese");
    }
});
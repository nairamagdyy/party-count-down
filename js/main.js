var days = document.getElementById("days").innerHTML;
$("#open").click(() => {
    $(".nav").animate({ left: 0 }, 1000);
})


var navWidth = $(".nav").innerWidth();
$("#close").click(() => {
    $(".nav").animate({ left: -navWidth }, 1000);
})

var singHeight1 = $("#mysinger1").innerHeight();

$("#singer1").click(()=>{
    if($("#mysinger1").css("height")== "0px"){
    $("#mysinger1").animate({ height: singHeight1 }, 1000);
    $("#mysinger2").animate({ height: "0px"}, 1000);
    $("#mysinger3").animate({ height: "0px"}, 1000);
    }
    else{
        $("#mysinger1").animate({ height: "0px"}, 1000);
    }
})
var singHeight2 = $("#mysinger1").innerHeight();
$("#mysinger2").css("display","none");

$("#singer2").click(()=>{
    if($("#mysinger2").css("height")== "0px"){
        $("#mysinger2").css("display","block");
        $("#mysinger2").animate({ height: singHeight1 }, 1000);
        $("#mysinger1").animate({ height: "0px"}, 1000);
        $("#mysinger3").animate({ height: "0px"}, 1000);
    }
    else{
        // $("#mysinger2").css("display","block");
        $("#mysinger2").animate({ height: "0px"}, 1000);
    }
})
var singHeight3 = $("#mysinger3").innerHeight();
$("#mysinger3").css("display","none");
$("#singer3").click(()=>{
    if($("#mysinger3").css("height")== "0px"){
        $("#mysinger3").css("display","block");
        $("#mysinger3").animate({ height: singHeight1 }, 1000);
        $("#mysinger1").animate({ height: "0px"}, 1000);
        $("#mysinger2").animate({ height: "0px"}, 1000);
    }
    else{
        // $("#mysinger2").css("display","block");
        $("#mysinger3").animate({ height: "0px"}, 1000);
    }
})

$("li a").click((e)=>{
    let targetSection = $(e.target).attr("href");
    let posiSection = $(targetSection).offset().top;
    console.log(posiSection)
    $("html,body").animate({scrollTop:posiSection},500);
})

$("textarea").keyup((e)=>{
    len = 100 - $(e.target).val().length;
    if(len <= 0){
        $("#count").html("your available character finished");
    }
    else{
        $("#count").html(`${len} Character Remaining`);
    }
})

function countdown(){
    let today = new Date();
    let myEvent = new Date(2023, 10, 25);
    let countDown1 = myEvent - today;
    // console.log(countDown1);
    var s = countDown1 / 1000;
    var m = s / 60;
    var h = m / 60;
    var d = (h * 0.0416666667)-30;
    //console.log(d,s,h,m);
    s %= 60;
    m %= 60;
    h %= 24;

    document.getElementById("days").innerHTML = ` ${Math.floor(d)} Days` ;
    document.getElementById("hours").innerHTML =` ${Math.floor(h)} Hours`;
    document.getElementById("minutes").innerHTML = ` ${Math.floor(m)} Minutes`;
    document.getElementById("seconds").innerHTML = ` ${Math.floor(s)} Seconds`;
    setTimeout(countdown, 500);
}

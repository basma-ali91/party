$('.open').click(function(){
   $(".main").css("margin-left","250px",$(".open").css("margin-left","250px"),  $("#sidebar").fadeIn(500))

})

$(".closeBtn").click(function(){
    $("#sidebar").fadeOut(500);
    $(".open").css("margin-left","0")
    $(".main").css("margin-left","0")
})

// section Two Slider


$("#sectionTwo h3").click(function(){

$(this).next().slideToggle(1000);
$("#sectionTwo div").not($(this).next()).slideUp(1000)

})




function dateEvent(){

    //  Get today date and time
    let now=new Date().getTime();

    // Set the date we are counting down to
    let event=new Date("dec 13, 2021 11:13:00") .getTime();
   
    let x=event-now;

    let days = Math.floor(x / (1000 * 60 * 60 * 24));
    let hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((x % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML=`<h3>${days} D</h3>`;
    document.getElementById("hour").innerHTML=`<h3>${hours} H</h3>`;
    document.getElementById("min").innerHTML=`<h3>${minutes} M</h3>`;
    document.getElementById("sec").innerHTML=`<h3>${seconds} S</h3>`;

    
    
}





$("textarea").keyup(function(){
    let maxchar=100;
    let length=$(this).val().length;
    let numchar =maxchar-length;
    if(numchar>0){
        $("#numofchar").text(numchar)
    }
    else{
        $("#numofchar").text("you finished your character ")
    }

})


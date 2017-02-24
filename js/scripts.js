//Backend

var cpuScore= [];
var score = [];
for (var i =0; i<=30; i++){
var hit =function(playerSwing){
  if(playerSwing%15 === 0){
    $(".ping").hide();
    $(".pong").hide();
    $(".pingPong").show();
    $(".rob").hide();
    $(score).push(score++);
  }else if(playerSwing%5 === 0){
    $(".ping").hide();
    $(".pong").show();
    $(".pingPong").hide();
    $(".rob").hide();
    $(score).push(score++);
  }else if (playerSwing%3 === 0){
    $(".ping").show();
    $(".pong").hide();
    $(".pingPong").hide();
    $(".rob").hide();
    $(score).push(score++);
  }else{
    $(".ping").hide();
    $(".pong").hide();
    $(".pingPong").hide();
    $(".rob").show();
    $(cpuScore).push(cpuScore++);
  };
  if(score === 10){
    $("#top").hide();
    $(".container").hide();
    $("#win").show();
   }else if(cpuScore === 20){
    $("#top").hide();
    $(".container").hide();
    $("#loser").show();
   };
  };
 };
/*blinker*/
function blink(elem,times,speed){
  if (times>0 || times<0){
    if ($(elem).hasClass("blink"))
        $(elem).removeClass("blink");
    else
        $(elem).addClass("blink")
  }
  clearTimeout(function(){
    blink(elem,times,speed);
  });
  if(times>0 || times<0){
    setTimeout(function(){
      blink(elem,times,speed);
    },speed);
    times -=5;
  }
};
//Frontend

$(document).ready(function(){
  $("form.userInput").submit(function(event){
    event.preventDefault();
    var paddle = parseInt($("input#swing").val());
    var result = hit(paddle);
    // tal = talley(result);

    var blinker= blink("#win h1", 2 , 700);
  });
  $("#clickHint").click(function(){
    $("#help").toggle();
  });
});

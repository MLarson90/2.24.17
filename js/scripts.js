//Backend
var score=0;
var hit =function(playerSwing){
  if(playerSwing%15 === 0){
    $(".ping").hide();
    $(".pong").hide();
    $(".pingPong").show();
    $(".rob").hide();
    return true;
  }else if(playerSwing%5 === 0){
    $(".ping").hide();
    $(".pong").show();
    $(".pingPong").hide();
    $(".rob").hide();
    return true;
  }else if (playerSwing%3 === 0){
    $(".ping").show();
    $(".pong").hide();
    $(".pingPong").hide();
    $(".rob").hide();
    return true;
  }else{
    $(".ping").hide();
    $(".pong").hide();
    $(".pingPong").hide();
    $(".rob").show();
    return false;
  };
};
var talley = function(data){
  if (data === true){
     return score = score + 1;
  };
};
 var win = function(score){
   if(score === 10){
   $("#top").hide();
   $(".container").hide();
   $("#win").show();
  };
 };
 /*hint button*/
 var hint =function(click){
   $("#help").show();
 }
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
    var tal = talley(result);
    var winner = win(tal);
    var blinker= blink("#win h1", 2 , 700);
  });
  $("div.hint").submit(function(event){
    event.preventDefault();
    var helpClick = $("#clickHint").onClick();
    var clickHelp = hint(helpClick);
  });
});

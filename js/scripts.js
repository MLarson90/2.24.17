//Backend
var hit =function(playerSwing){
  if(playerSwing%15 === 0){
    console.log("ping-pong");
  }else if(playerSwing%5 === 0){
    console.log('pong');
  }else if (playerSwing%3 === 0){
    console.log("ping")
  }else{
    console.log("point team rob");
  };
};


//Frontend

$(document).ready(function(){
  $("form.userInput").submit(function(event){
    event.preventDefault();
    var paddle = parseInt($("input#swing").val());
    var result = hit(paddle);

  });

});

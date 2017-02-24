//Backend
var array = [];
var newArray = 0;

var hit = function(input){
  $("#answer").empty();
  for(i=0; i<=(input); i++){
    newArray = newArray+1;
    array.push(newArray);
  }
  for(j=0; j<array.length; j++){
    if (array[j]%15===0){
      $("#answer").append("<li>" + 'ping-pong' + "</li>");
    }else if (array[j]%5===0){
      $("#answer").append("<li>" + 'pong' + "</li>");
    }else if (array[j]%3 ===0){
      $("#answer").append("<li>" + 'ping' + "</li>")
    }else{
      $("#answer").append("<li>" + array[j] + "</li>");
    }
  }
};
//Frontend

$(document).ready(function(){
  $("form.userInput").submit(function(event){
    event.preventDefault();

    var pad = parseInt($("input#swing").val());
    var swing = hit(pad);


  });
});

//User Interface Logic
$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numBer").val());
    if (userInput < 0 || userInput > 50) {
      alert('please enter a positive number below 50');
    } else {
      display = boopTobeep(userInput);
    }
    $("#answers").text(display);
  });
  $(".formOne").trigger("reset");
});


function boopTobeep(userInput) {
  var birdOutput = [];
  for (var i = 0; i <= userInput; i++ ) {
   var inputString = (i).toString();
     if (inputString.includes("1")) {
      birdOutput.push("Beep!");
    } else if (inputString.includes("2")) {
      birdOutput.push("Boop!");
    } else if (inputString.includes("3")) {
      birdOutput.push("I'm sorry, Dave. I'm afraid I can't do that");
    }  else {
      birdOutput.push(i);
    }


  }
  return birdOutput;
}

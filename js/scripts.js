//User Interface Logic

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numBer").val());
    var results = boopTobeep(userInput);
    if (userInput < 0) {
      alert('please enter a positive number');
    } else {
      display = boopTobeep(userInput);
    }
    $("#answers").text(display);
  });
});

//Business Logic

function boopTobeep(userInput) {
  var birdOutput = [];
  for (var i = 0; i <= userInput; i++) {
    if ([i].includes(1)) {
      birdOutput.push("Beep");
    } else if ([i].includes(2)) {
      birdOutput.push("Boop!");
    } else if ([i].includes(3)) {
      birdOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
  return birdOutput;
}
boopTobeep();

function autoRefreshPage() {
  window.location = window.location.href;
}
setInterval('autoRefreshPage()', 5000);

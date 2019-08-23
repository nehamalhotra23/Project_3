//User Interface Logic

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#numBer").val();
    var result = numberToString(userInput);
    $("#answer").text(result);
    $("#formOne").trigger('reset');
    if (userInput < 0) {
      alert('please enter a positive number');
    } else {
      numberToString(userInput);
    }
  });

});

//Business Logic

 function numberToString(userInput) {
  var birdOutput = [];
if (userInput.includes(1)) {
  $("#answer").append("<li>" + 'Beep!' + "</li>");
}
if (userInput.includes(2)) {
  $("#answer").append("<li>" + 'Boop!' + "</li>");
}
if (userInput.includes(3)) {
  $("#answer").append("<li>" + 'I am sorry, Dave. I am afraid I can\'t do that!' + "</li>")
} if (for (var i = 0; i < userInput.length; i++) {

})

}





  

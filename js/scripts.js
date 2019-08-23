//User Interface Logic

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#numBer").val();
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
} if (userInput.includes(2)) {
$("#answer").append("<li>" + 'Boop!' + "</li>");
}   if (userInput.includes(3)){
  $("#answer").append("<li>" + 'I am sorry, Dave. I am afraid I can\'t do that!' + "</li>")
} else {
  alert();
}
}










//   // for (var i = 0; i <= userInput; i++) {
//   //   birdOutput.push(i.toString());
//   // }
// for (var i = 0; i < outputArray.length; i++) {
//
//


//   var birdOutput = [];
//   for (var i = 0; i < birdOutput.length; i++) {
//     if (birdOutput[i].includes(3)) {
//       birdOutput[i] = "I'm sorry, Dave, I'm afraid I can't do that";
//     } else if (birdOutput[i][i].includes(2)) {
//       birdOutput[i] = "Boop!";
//     } else if (birdOutput[i][i].includes(1)) {
//       birdOutput[i] = "Beep!";
//     }
//   }

// //User Interface Logic
//
// $(document).ready(function() {
//   $(".formOne").submit(function(event) {
//     event.preventDefault();
//     var userInput = $("input#numBer").val();
//     // var result = numberToString(userInput);
//     // $("#answer").text(result);
//     $("#formOne").trigger('reset');
//     if (userInput < 0) {
//       alert('please enter a positive number');
//     } else {
//       numberToString(userInput);
//     }
//   });
//
// });
//
//Business Logic

//  function numberToString(userInput) {
//   var birdOutput = [];
// if (userInput[1]=== '1'){
//   $("#answer").append("<li>" + 'Beep!' + "</li>");
// }
// if (userInput[1] === '2') {
//   $("#answer").append("<li>" + 'Boop!' + "</li>");
// }
// if (userInput[1] === '3') {
//   $("#answer").append("<li>" + 'I am sorry, Dave. I am afraid I can\'t do that!' + "</li>")
// } if (userInput[0] ) {
//
// }
//
// }

//This is the User logic//

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#numBer").val());
    var output = beep(userInput);
    var outputString = output.join("");
    // $("#answers").show();
    $("#answers").text(outputString);
    if (userInput < 0) {
      alert('please enter a positive number');
    } else {
       beep(userInput);
    }

  });
});

var beep = function(userInput) {
  var results = [];
  for (var i = 0; i <= userInput; i++) {
    var newString = (i).toString();

    if (newString.includes("1")) {
      results.push("Beep");
    } else if (newString.includes("2")) {
      results.push("Boop!");
    } else if (newString.includes("3")) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
  return results;
}

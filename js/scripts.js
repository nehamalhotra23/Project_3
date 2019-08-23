//User Interface Logic

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#numBer").val();
    // var newArray = $("#answer").append("<li>" + userInput + "</li>")
    var bird = []
    if (userInput < 0) {
      alert('please enter a positive number');
    } else {
      numberToString(userInput);
    }

  });
});

//Business Logic

function numberToString(userInput) {
  if (userInput.includes(1)) {
    $("#answer").append("<li>" + 'Boo!' + "</li>")
  } else  {
    twoToBoo(userInput);
  }
}

function twoToBoo(userInput) {
  if (userInput.includes(2)) {
    $("#answer").append("<li>" + 'Boop!' + "</li>")
  } else {
    threeToDamn(userInput);
  }
}

function threeToDamn(userInput) {
  if(userInput.includes(3)) {
  $("#answer").append("<li>" + 'I am sorry, Dave. I am afraid I can\'t do that!' + "</li>")
} else  {
  alert();
}
}

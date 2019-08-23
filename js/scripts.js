$(document).ready(function(){
$(".formOne").submit(function(){
  event.preventDefault();
var userInput = parseInt($("input#numBer").val());
console.log(userInput)
var Num1 = [1 , 2, 3];
console.log(Num1);
 var newArray = [];
for (var i = 0; i < userInput; i++)
 console.log(userInput[i])
if (Num1.includes(userInput[i])) {
   newArray.push('beep');

}

});


});

       //front-end user interface logic // // // // //
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

      // back-end business logic
    var userInput = parseInt($("#number").val());
  for (var multiple = 1; multiple <= userInput; multiple += 1) {
    if (multiple % 15 === 0) {
      alert ("ping-pong");
    } else if (multiple % 3 === 0) {
      alert ("ping");
    } else if (multiple % 5 === 0) {
      alert ("pong");
    } else {
      multiple = multiple;
      alert (multiple);
    }
  }
    if (userInput === "") {
      alert('Please enter a number to play')
      return;
      }
  });
});

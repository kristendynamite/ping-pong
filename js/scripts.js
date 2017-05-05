

// // // // // back-end business logic // // // // //
function pingPong(userInput) {
  var parsedInput = parseInt(userInput);

  var newArray = [];
  for (var multiple = 1; multiple <= parsedInput; multiple += 1) {
    if (multiple % 15 === 0) {
      newArray.push("ping-pong");
    } else if (multiple % 3 === 0) {
      newArray.push ("ping");
    } else if (multiple % 5 === 0) {
      newArray.push ("pong");
    } else {
      newArray.push (multiple);
      // newArray = newArray.toString().split(" ");
    }
    // newArray = newArray.toString();
    return newArray;
  }
}
// // // // // front-end user interface logic // // // // //
$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#number").val();

    if (userInput === "") {
      alert('Please enter a number to play')
      return;
      }
    var results = pingPong(userInput);

    results.forEach(function(result){
      $("#result-numbers").prepend("<li>" + "</li>");
    });

    $("#output").show();

  });
});

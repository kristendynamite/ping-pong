

// // // // // back-end business logic // // // // //
function pingPong(userInput) {
  var newArray = [];
  for (var i = 1; i < userInput; i++) {
    if (i % 15 === 0) {
      newArray.push("ping-pong");
    } else if (i % 3 === 0) {
      newArray.push ("ping");
    } else if (i % 5 === 0) {
      newArray.push ("pong");
    } else {
      newArray.push (userInput.toString());
      // newArray = newArray.toString().split(" ");
    }
  }
}
// // // // // front-end user interface logic // // // // //
$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    //
    // if (userInput === "") {
    //   alert('Please enter a number to play')
    //   return;
    //   }
    var result = pingPong(userInput);
    $(".resultNumbers").text(result);

    $("#output").show();

  });
});

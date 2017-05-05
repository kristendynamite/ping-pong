// // // // // front-end user interface logic // // // // //
$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#number").val();

    if (userInput === "") {
      alert('Please enter a number to play')
      $("#output").hide();
      }

    $(".number").text(userInput)

    $("#output").show();

  });
});

// // // // // back-end business logic // // // // //
// var parseInput = parseInt($("#number").val());
// var newArray = [];
//
// if (parseInput % 3 = 0 && parseInput % 5 = 0) {
//   newArray.push(["ping-pong"]);
// } else if (parseInput % 3 = 0) {
//   newArray.push(["ping"]);
// } else if (parseInput % 5 = 0) {
//   newArray.push(["pong"]);
// }

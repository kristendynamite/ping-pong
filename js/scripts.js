// back-end business logic

function pingPong(userInput) {
  var pingPongArray = [];

  for (i = 1; i <= userInput; i += 1) {
    // var userInput = parseInt(rawInput);
    // var numbersArray = [];
    if (i % 15 === 0) {
      pingPongArray.push("ping-pong");
    } else if (i % 3 === 0) {
      pingPongArray.push("ping");
    } else if (i % 5 === 0) {
      pingPongArray.push("pong");
    } else {
      pingPongArray.push(i);
  };
  }

  return pingPongArray;
  console.log(pingPongArray);

}


///front-end user interface logic // // // // //
$(document).ready(function(){

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#number").val());
    var pingPongArray = pingPong(userInput);

    pingPongArray.forEach(function(val) {
      $("#result-numbers").append("<li>" + val + "</li>")

    });

  });
});

// Business Logic
function countUp(bound) {
  //Create empty array
  var result = [];
  //Use for loop to count up to bound.
  for (var i = 1; i <= bound; i += 1) {
  //Use if/then to replace every 15th number.
    if ((i % 15) === 0) {
      result.push("pingpong");
  //Use if/then to replace every 3rd number.
    } else if ((i % 3) === 0) {
      result.push("ping");
  //Use if/then to replace every 5th number.
    } else if ((i % 5) === 0) {
      result.push("pong");
  //Use else to display all remaining with numbers.
    } else {
      result.push(i);
    }
  }
  return result;
}

// User Logic
$(document).ready(function() {
  $('form').submit(function() {
    //take bound
    var bound = parseInt($('#num1').val());
    //make sure it's positive
    if (bound > 0) {
    //call function
    var resultArray = countUp(bound);
    // var resultArray = pongPlace(bound);
    //display output
    $('ul').empty();
    $.each(resultArray, function (idx, result) {
      $('<li>').text(result).appendTo('ul');
    })
    };
    return false;
  });
});



function countUp(bound) {
  var result = [];
  var thirdResult = [];
  for (var i = 1; i <= bound; i += 1) {
  if ((i % 3) === 0) {
    result.push("ping");
  } else {
    result.push(i);
  }}
  return result;
}
//
// function pingPlace(bound, threes) {
//   var result = [];
//   for (var i = 3; i <= bound; i += 3) {
//     result.push("ping");
//   }
//   return result;
// }
// function pongPlace(bound, fives) {
//   var result = [];
//   for (var i = 5; i <= bound; i += 5) {
//     result.push("pong");
//   }
//   return result;
// }

$(document).ready(function() {
  $('form').submit(function() {
    //grab bound
    var bound = parseInt($('#num1').val());
    // var multiple = parseInt($('#num2').val());
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

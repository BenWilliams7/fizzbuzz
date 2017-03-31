function countup(final) {
  var result = [];
  for (var i = 1; i <= final; i += 1) {
    result.push(i);
  }
  return result;
}

$(document).ready(function() {
  $('form').submit(function() {
    //grab final and multiple
    var final = parseInt($('#num1').val());
    // var multiple = parseInt($('#num2').val());
    //make sure it's positive
    if (final > 0) {
        //call function
        var resultArray = countup(final);
        //display output
        $('ul').empty();
        $.each(resultArray, function (idx, result) {
          $('<li>').text(result).appendTo('ul');
        })
    };
    return false;
  });
});

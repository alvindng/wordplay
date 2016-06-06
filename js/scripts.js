$(document).ready(function() {
  $("#wordplay form").submit(function(event) {

    var sentence = $("input#sentence").val();
    var space = " ";
    var comma = ",";
    var arrayOfStrings;

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
      return arrayOfStrings;
    }

    var newArray = splitString(sentence, space);
    alert(newArray);

    event.preventDefault();
  });

});

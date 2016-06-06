$(document).ready(function() {
  $("#wordplay form").submit(function(event) {

    var sentence = $("input#sentence").val();
    var space = " ";
    var arrayOfStrings;
    var newSentence = [];

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
      return arrayOfStrings;
    }

    var newArray = splitString(sentence, space);

    newArray.forEach(function(element){
      if (element.length > 2) {
        newSentence.push(element)
        newSentence.reverse();
      }
    })

    var finalSentence = newSentence.join(" ");
    document.getElementById("new-sentence").innerHTML = finalSentence;

    event.preventDefault();
  });

});

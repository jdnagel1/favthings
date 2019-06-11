$(document).ready(function() {
  $("#favForm").submit(function(event) {
    var favThings = ["food", "movie", "music"];
    favThings.forEach(function(hi){
      var userInput = $("input#" + hi).val();
      $("." + hi).text(userInput);
    });


    things = [$("#food").val(), $("#movie").val(), $("#music").val()];
    $(".favAnswers").show();


    var array2 = [];
    array2.push(things[0], things[1], things[2]);
    $("#answer1").text(array2[0]);
    $("#answer2").text(array2[1]);
    $("#answer3").text(array2[2]);


    event.preventDefault();
  });
});

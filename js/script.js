var salifornia = 0;
var tussia = 0;
var tostralia = 0;
var vivimarlostown = 0;

$(document).ready(function() {
  $("#enter-page").click(function() {
    $("#page1").hide();
    $("#page2").show();
  });
  $("#basic-info").submit(function(e) {
    var nameInput = $("#name").val();
    $(".firstName").text(nameInput)
    $("#page2").hide();
    $("#page3").show();
    event.preventDefault();
  });
  $("#questions").submit(function(event) {
    var weather = $("#weather").val();
    var distance = $("#distance").val();
    var terrain = $("#terrain").val();
    var language = $("#language").val();
    var population = $("#population").val();
    event.preventDefault();
    console.log(weather);
    console.log(distance);
    console.log(terrain);
    console.log(language);
    console.log(population);


  });
});

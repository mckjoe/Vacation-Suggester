var salifornia = 0;
var tussia = 0;
var tostralia = 0;
var vivimarlostown = 0;

$(document).ready(function() {
  $("#enter-page").click(function() {
    $("#page1").hide();
    $("#page2").fadeIn();
  });
  $("#basic-info").submit(function(e) {
    var nameInput = $("#name").val();
    var cakeInput = $("#cake").val();
    $(".firstName").text(nameInput);
    $(".cake").text(cakeInput);
    $("#page2").hide();
    $("#page3").fadeIn();
    event.preventDefault();
  });
  $("#questions").submit(function(event) {
    event.preventDefault();
    var weather = $("#weather").val();
    var distance = $("#distance").val();
    var terrain = $("#terrain").val();
    var language = $("#language").val();
    var population = $("#population").val();


    if (weather === "1") {
      tostralia += 10
    } else if (weather === "2") {
      vivimarlostown += 10
    } else if (weather === "3") {
      tussia += 10
    } else if (weather === "4") {
      salifornia += 10
    }

    if (distance === "1") {
      tostralia += 10
    } else if (distance === "2") {
      vivimarlostown += 10
    } else if (distance === "3") {
      tussia += 10
    } else if (distance === "4") {
      salifornia += 10
    }


    if (terrain === "1") {
      tostralia += 10
    } else if (terrain === "2") {
      vivimarlostown += 10
    } else if (terrain === "3") {
      tussia += 10
    } else if (terrain === "4") {
      salifornia += 10
    }

    if (language === "1") {
      tostralia += 10
    } else if (language === "2") {
      vivimarlostown += 10
    } else if (language === "3") {
      tussia += 10
    } else if (language === "4") {
      salifornia += 10
    }

    if (population === "1") {
      tostralia += 10
    } else if (population === "2") {
      vivimarlostown += 10
    } else if (population === "3") {
      tussia += 10
    } else if (population === "4") {
      salifornia +=10
    }


    if (tostralia > vivimarlostown && tostralia > tussia && tostralia > salifornia) {
      $(".hider").hide();
      $("#tostralia").fadeIn();
    } else if (vivimarlostown > tostralia && vivimarlostown > tussia && vivimarlostown > salifornia) {
      $(".hider").hide();
      $("#vivimarlostown").fadeIn();
    } else if (tussia > vivimarlostown && tussia > salifornia && tussia > tostralia) {
      $(".hider").hide();
      $("#tussia").fadeIn();
    } else if (salifornia > vivimarlostown && salifornia > tostralia && salifornia > tussia) {
      $(".hider").hide();
      $("#salifornia").fadeIn();
    } else {
      $(".hider").hide();
      $("#vivimarlostown").fadeIn()
    }
  });
});

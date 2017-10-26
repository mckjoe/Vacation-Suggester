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
    event.preventDefault();
    var weather = $("#weather").val();
    var distance = $("#distance").val();
    var terrain = $("#terrain").val();
    var language = $("#language").val();
    var population = $("#population").val();

    if (weather === "0") {
      alert("oopsies! Please select an option from the dropdown menu!")
    }  else if (weather === "1") {
      tostralia += 10
    } else if (weather === "2") {
      vivimarlostown += 10
    } else if (weather === "3") {
      tussia += 10
    } else if (weather === "4") {
      salifornia
    }

    if (distance === "0") {
      alert("oopsies! Please select an option from the dropdown menu!")
    }  else if (distance === "1") {
      tostralia += 10
    } else if (distance === "2") {
      vivimarlostown += 10
    } else if (distance === "3") {
      tussia += 10
    } else if (distance === "4") {
      salifornia
    }

    if (terrain === "0") {
      alert("oopsies! Please select an option from the dropdown menu!")
    }  else if (terrain === "1") {
      tostralia += 10
    } else if (terrain === "2") {
      vivimarlostown += 10
    } else if (terrain === "3") {
      tussia += 10
    } else if (terrain === "4") {
      salifornia
    }

    if (language === "0") {
      alert("oopsies! Please select an option from the dropdown menu!")
    }  else if (language === "1") {
      tostralia += 10
    } else if (language === "2") {
      vivimarlostown += 10
    } else if (language === "3") {
      tussia += 10
    } else if (language === "4") {
      salifornia
    }

    if (population === "0") {
      alert("oopsies! Please select an option from the dropdown menu!")
    }  else if (population === "1") {
      tostralia += 10
    } else if (population === "2") {
      vivimarlostown += 10
    } else if (population === "3") {
      tussia += 10
    } else if (population === "4") {
      salifornia
    }

    if (tostralia > vivimarlostown && tostralia > tussia && tostralia > salifornia) {
      $(".hider").hide();
      $("#tostralia").show();
    } else if (vivimarlostown > tostralia && vivimarlostown > tussia && vivimarlostown > salifornia) {
      $(".hider").hide();
      $("#vivimarlostown").show();
    } else if (tussia > vivimarlostown && tussia > salifornia && tussia > tostralia) {
      $(".hider").hide();
      $("#tussia").show();
    } else if (salifornia > vivimarlostown && salifornia > tostralia && salifornia > tussia) {
      $(".hider").hide();
      $("#salifornia").show();
    }
  });
});

//Pour mettre du noir au menu au scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("scroll");
  } else {
    $("nav").removeClass("scroll");
  }
});

//Pour faire dérouler le menu hamburger
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $("nav ul").toggleClass("menu");
  });
});

//Pour faire défiler les images
let i = 0;
let images = ["livre1.jpeg", "livre2.jpeg", "livre3.jpeg", "livre4.jpeg"];

function changeImg() {
  document.slide.src = "img/" + images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", 2000);
}

// Indicateur de scroll
$(window).scroll(function () {
  let winTop = $(window).scrollTop(); //position actuelle
  let docHeight = $(document).height(); //hauteur du document
  let winHeight = $(window).height(); //hauteur de la fenêtre
  let scrolled = (winTop / (docHeight - winHeight)) * 100;
  $(".scrollage").css("width", scrolled + "%");
});

window.onload = changeImg;

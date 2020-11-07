const navslide = () => {
  const burger = document.querySelector(".burger");
  const navlink = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li a");
  burger.addEventListener("click", () => {
    // links pop up
    navlink.classList.toggle("nav-links-close");
    // burger change
    burger.classList.toggle("burger-close");
    //hamburger closes when link is clicked
  });
  navlinks[0].addEventListener("click", () => {
    navlink.classList.toggle("nav-links-close");
    burger.classList.toggle("burger-close");
  });
  navlinks[1].addEventListener("click", () => {
    navlink.classList.toggle("nav-links-close");
    burger.classList.toggle("burger-close");
  });
  navlinks[2].addEventListener("click", () => {
    navlink.classList.toggle("nav-links-close");
    burger.classList.toggle("burger-close");
  });
  navlinks[3].addEventListener("click", () => {
    navlink.classList.toggle("nav-links-close");
    burger.classList.toggle("burger-close");
  });
};

navslide();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 200);
  });
});

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

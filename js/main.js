const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

window.onscroll = function () {
  makeNavbarSticky();
  scrollFunction();
};

function makeNavbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 180) {
      $('.menu__slice-image').removeClass('floating-image');
    } else {
      $('.menu__slice-image').addClass('floating-image');
    }
  });
});

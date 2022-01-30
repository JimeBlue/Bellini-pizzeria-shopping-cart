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

toTopButton = document.getElementById('to-top-button');

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
}

toTopButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

$('.btn__nav').click(function (event) {
  event.preventDefault();
});

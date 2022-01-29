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

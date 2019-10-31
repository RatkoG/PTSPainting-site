const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation__list');
const links = document.querySelectorAll('.navigation__item');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('is-active');
});

const img = document
  .querySelector('.gallery__item--1')
  .addEventListener('click', function () {
    console.log('image!');
  });
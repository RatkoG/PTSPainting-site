const modal = document.querySelector('#modalForm');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('.closeBtn');
const hamburger = document.querySelector('.hamburger');
const menuBg = document.querySelector('.navigation__background');
const nav = document.querySelector('.navigation__list');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
hamburger.addEventListener('click', openMenu)

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

function openMenu() {
  // navLinks.classList.toggle('open');
  hamburger.classList.toggle('is-active');
  if (hamburger.classList.contains('is-active')) {
    menuBg.style.transform = ' scale(80)'
    nav.style.display = "flex";
    nav.style.opacity = "1";
  } else {
    menuBg.style.transform = ' scale(0)'
    nav.style.display = "none";
    nav.style.opacity = "0";
    nav.style.transition = "2s";
  }
}
// document.querySelector('.btn--green').addEventListener('click', function () {
//   console.log('Working');
// });
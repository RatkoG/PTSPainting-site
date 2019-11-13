const modal = document.querySelector('#modalForm');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('.closeBtn');
const hamburger = document.querySelector('.hamburger');
const menuBg = document.querySelector('.navigation__background');
const nav = document.querySelector('.navigation__list');
const navLinks = document.querySelectorAll('.navigation__link')

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
hamburger.addEventListener('click', openMenu)
navLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

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

function navbarLinkClick(event) {
  console.log("Working");
  smootScroll(event)
  if (hamburger.classList.contains('is-active')) {
    hamburger.click();
  }
}

function smootScroll(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  const targetId = event.target.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
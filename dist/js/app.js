const modal = document.querySelector('#modalForm');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('.closeBtn');
// const hamburger = document.querySelector('.hamburger');

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

// function openMenu() {
//   // navLinks.classList.toggle('open');
//   hamburger.classList.toggle('is-active');
// }
// document.querySelector('.btn--green').addEventListener('click', function () {
//   console.log('Working');
// });
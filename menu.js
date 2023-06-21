
const hamburger = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
  document.querySelector('.nav-bar').classList.toggle('activecolor');
  hamburger.classList.toggle('cancel');
  document.querySelector('.headline').classList.toggle('blur');
});

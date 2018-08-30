const navIcon = document.getElementById('rw-logo-nav');

const navToggleMenu = document.querySelector('.navbar-links');
const container = document.querySelector('.container');

navIcon.addEventListener('click', () => {
  navToggleMenu.classList.toggle('navbar-opened');
  container.classList.toggle('navbar-toggle-adjust');
  if (window.location.pathname == '/projects-ui.html'){
    document.querySelector('.projects').classList.toggle('projects-adjust')
  }
  if (window.location.pathname == '/thoughts-ui.html'){
    document.querySelector('.thoughts-blog').classList.toggle('blog-adjust');
  }
});
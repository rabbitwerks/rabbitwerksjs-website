
// mobile nav bar logo toggle button
const navIcon = document.getElementById('rw-logo-nav');

// nav menu - the unordered list
const navToggleMenu = document.querySelector('.navbar-links');

// svg background graphics container
const container = document.querySelector('.container');

navIcon.addEventListener('click', () => {
  navToggleMenu.classList.toggle('navbar-opened');
  container.classList.toggle('navbar-toggle-adjust');
  // if current page is projects, grab projects container and adjust position to compensate for open nav
  if (window.location.pathname == '/projects-ui.html'){
    document.querySelector('.projects').classList.toggle('projects-adjust')
  }
  // if current page is thoughts, grab blog container and adjust position to compensate for open nav
  if (window.location.pathname == '/thoughts-ui.html'){
    document.querySelector('.thoughts-blog').classList.toggle('blog-adjust');
  }
});
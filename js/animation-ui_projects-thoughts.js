//NAV LINK DOM SELECTOR
const thoughtsLink = document.getElementById('nav-thoughts-link');

// TUBE BACKGROUND SVGS
const diagTubeLeft = document.getElementById('diag-tube-left');
const diagTubeRight = document.getElementById('diag-tube-right');
const miniTubesLeft = document.getElementById('mini-tubes-left');
const miniTubesRight = document.getElementById('mini-tubes-right');
const headerTube = document.getElementById('header-tube');
const headerText = document.getElementById('header-tube-text');

thoughtsLink.addEventListener('click', () => {
  if (window.innerWidth < 480) {
    // close the toggle menu first
    navToggleMenu.classList.toggle('navbar-opened');
    container.classList.toggle('navbar-toggle-adjust');
    // run animation function mobile
    mobile_animateTubes_ProjectsThoughts();
  } else {
    // run animation function desktop
    animateTubes_ProjectsThoughts();
  }  //need to set to none first, to clear it, then add animation styles to transition translateY - down
  document.querySelector('.projects').style.animation = 'none';
  document.querySelector('.projects').style.opacity = '1';
  setTimeout(() => {
    document.querySelector('.projects').style.transform = 'translateY(20%)';
    document.querySelector('.projects').style.opacity = '0';
  }, 400);
  setTimeout(() => {
    location.href = 'thoughts-ui.html';
  }, 1200);
});

// animation function for desktop
function animateTubes_ProjectsThoughts() {
  
  //diag tubes
  diagTubeLeft.style.transform = 'rotate(120deg) translate(564px, 155px)';
  diagTubeRight.style.transform = 'rotate(-240deg) translate(-145px, 145px)';

  miniTubesLeft.style.animation = 'none';
  miniTubesLeft.style.opacity = 1;
  setTimeout(() => {
    miniTubesLeft.style.opacity = 0;
    miniTubesLeft.style.transform = 'translateX(300px)';
  }, 50);
  
  miniTubesRight.style.animation = 'none';
  miniTubesRight.style.opacity = 1;
  setTimeout(() => {
    miniTubesRight.style.opacity = 0;
    miniTubesRight.style.transform = 'translateX(-300px)';
  }, 50);
  
  //header tubes and text
  headerTube.style.transform = 'translateX(-77.6%)';
  headerText.style.transform = 'translateX(-143%)';
  headerText.style.opacity = 0;
  setTimeout(() => {
    headerText.textContent = "rabbit thoughts";
    headerText.style.opacity = 1;
  }, 400);
}

// animation function for mobile
function mobile_animateTubes_ProjectsThoughts() {
  
  // diag tubes
  diagTubeLeft.style.transform = 'rotate(120deg) translate(41%, 10%)';
  diagTubeRight.style.transform = 'rotate(-240deg) translate(24%, -6%)';

  miniTubesLeft.style.animation = 'none';
  miniTubesLeft.style.opacity = 1;
  setTimeout(() => {
    miniTubesLeft.style.opacity = 0;
    miniTubesLeft.style.transform = 'translateX(300px)';
  }, 50);
  
  miniTubesRight.style.animation = 'none';
  miniTubesRight.style.opacity = 1;
  setTimeout(() => {
    miniTubesRight.style.opacity = 0;
    miniTubesRight.style.transform = 'translateX(-300px)';
  }, 50);
  
  // header tubes and text
  // stays in same position
  headerText.style.opacity = 0;
  setTimeout(() => {
    headerText.textContent = "rabbit thoughts";
    headerText.style.opacity = 1;
  }, 400);
}
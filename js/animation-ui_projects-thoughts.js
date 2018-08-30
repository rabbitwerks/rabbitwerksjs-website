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
  animateTubes_ProjectsThoughts();
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
// NAVBAR DOM ELEMENTS
const werksLink = document.getElementById('nav-werks-link');


// TUBE BACKGROUND SVGS
const diagTubeLeft = document.getElementById('diag-tube-left');
const diagTubeRight = document.getElementById('diag-tube-right');
const miniTubesLeft = document.querySelector('.home #mini-tubes-left');
const miniTubesRight = document.getElementById('mini-tubes-right');
const headerTube = document.getElementById('header-tube');
const headerText = document.getElementById('header-tube-text');
const brandDisplay = document.querySelector('.brand-display');
const ctaBtn = document.getElementById('cta-svg');



werksLink.addEventListener('click', () => {
  animateTubes_IndexProjects();
  ctaBtn.style.opacity = 0;
  setTimeout(() => {
    brandDisplay.style.opacity = 0;
  }, 800);
  setTimeout(() => { // sudo navigation function
    location.href = 'projects-ui.html'
  }, 1200);
});

ctaBtn.addEventListener('click', () => {
  animateTubes_IndexProjects(); // index to werks animation
  animateCta();
  setTimeout(() => {
    brandDisplay.style.opacity = 0;
  }, 800);
  setTimeout(() => { // sudo navigation function
    location.href = 'projects-ui.html'
  }, 1200);
});

function animateCta() {
  ctaBtn.style.transform = 'translateY(-150px)';
  setTimeout(() => {ctaBtn.style.transform = 'translateY(500px)'}, 200);
}

function animateTubes_IndexProjects() { // - home page to werks
  
  // main diagonal tubes
  diagTubeLeft.style.left = '-14.75%'; // left
  diagTubeRight.style.transform = 'translate(55%, -5%)'; //right, down

  // Mini Tube Set left side animation out
  miniTubesLeft.style.animation = 'none';
  miniTubesLeft.style.opacity = 1;
  setTimeout(() => {
    miniTubesLeft.style.opacity = 0;
    miniTubesLeft.style.transform = 'translateX(-150px)';
  }, 50);

  // Mini Tube Set left side animation out
  miniTubesRight.style.animation = 'none';
  miniTubesRight.style.opacity = 1;
  setTimeout(() => {
    miniTubesRight.style.opacity = 0;
    miniTubesRight.style.transform = 'translateX(150px)';
  });

  // header tube and text
  headerTube.style.transform = 'translate(-172px, -86px)';
  headerText.style.transform = 'translate(-260px, -85px)';
  headerText.style.opacity = 0;
  setTimeout(() => {
    headerText.textContent = "werks and scripts";
    headerText.style.opacity = 1;

  }, 400);



}




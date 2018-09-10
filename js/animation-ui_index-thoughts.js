// NAVBAR DOM ELEMENTS
const thoughtsLink = document.getElementById('nav-thoughts-link');


thoughtsLink.addEventListener('click', () => {
  if (window.innerWidth < 480) {
    // close the toggle menu first
    navToggleMenu.classList.toggle('navbar-opened');
    container.classList.toggle('navbar-toggle-adjust');
    // run animation function
    mobile_animateTubes_IndexThoughts();
  } else {
    animateTubes_IndexThoughts();
  }
  ctaBtn.style.opacity = 0;
  setTimeout(() => {
    brandDisplay.style.opacity = 0;
  }, 800);
  setTimeout(() => { // sudo navigation function
    location.href = 'thoughts-ui.html'
  }, 1200);
});


function animateTubes_IndexThoughts() { // - home page to werks
  
  // main diagonal tubes
  diagTubeLeft.style.transform = 'translate(-53%, 34%) rotate(120deg)'; 
  diagTubeRight.style.transform = 'translate(63%, -25%) rotate(-240deg)'; //right, down

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
  headerTube.style.transform = 'translate(-98%, -86px)';
  headerText.style.transform = 'translate(-200%, -85px)';
  headerText.style.opacity = 0;
  setTimeout(() => {
    headerText.textContent = "rabbit thoughts";
    headerText.style.opacity = 1;

  }, 400);

}


function mobile_animateTubes_IndexThoughts() { // - home page to werks
  
  // main diagonal tubes
  diagTubeLeft.style.transform = 'translate(-5%, 10%) rotate(120deg)'; // rotate
  diagTubeRight.style.transform = 'translate(10%, -25%) rotate(120deg)'; // rotate, up

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
    // headerTube.style.transform = 'translate(0, -375px)';
    headerTube.style.top = '15%';
    // headerText.style.transform = 'translate(0, -374px)';
    headerText.style.opacity = 0;
    headerText.style.top = '15%';
    setTimeout(() => {
      headerText.textContent = "rabbit thoughts";
      headerText.style.fontSize = '210%';
    }, 400);
    setTimeout(() => {
      headerText.style.opacity = 1;
    }, 800)

}




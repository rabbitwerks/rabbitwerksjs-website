function displayBlogPosts(){
  const posts = document.querySelectorAll('.blog-post');

  // adds animate class to each post every 0.3 seconds
  // in sequential order. a for loop that calls an IIFE
  // which sets a timeout for each post, at increasing 
  // durations based on the value of 'i' in the for loop
  for(let i = 0; i < posts.length; i++){
    (function(i){
      setTimeout(() => {
        posts[i].classList.add('bp-anim');
      }, 300 * i)
    }(i));
  }

  posts.forEach((post) => {
    // let postTest = document.getElementById('post-000'); 
    // put into forEach after qsAll
    let postId = post.dataset.postId;
    console.log(postId)
    let postExtender = document.querySelector(`#post-${postId} .post-extender i`);
    let postHeader = document.querySelector(`#post-${postId} .post-header`);

    postHeader.addEventListener('click', (e) => {
      showPost(postId);
    });
    postExtender.addEventListener('click', (e) => {
      hidePost(postId);
    });
  });

  function showPost(id) {
    document.querySelector(`#post-${id} .post-title`).classList.remove('pt-hide');
    document.querySelector(`#post-${id} .post-title`).classList.add('pt-ext');
    document.querySelector(`#post-${id} .post-date`).classList.add('pd-ext');
    document.querySelector(`#post-${id} .post-body`).classList.add('pb-ext');
    if (window.innerWidth < 480){
      document.querySelector(`#post-${id} .post-extender`).style.top = '1%';
    } else {
      document.querySelector(`#post-${id} .post-extender`).style.top = '3%';
    }
    document.querySelector(`#post-${id} .post-extender i`).style.transform = 'rotate(90deg)';
    document.querySelector(`#post-${id} .post-extender i`).style.color = 'var(--brightGreen)';
  };

  function hidePost(id) {
    document.querySelector(`#post-${id} .post-extender i`).style.transform = 'rotate(0deg)';
    document.querySelector(`#post-${id} .post-title`).classList.replace('pt-ext', 'pt-hide');
    document.querySelector(`#post-${id} .post-date`).classList.replace('pd-ext', 'pd-hide');
    document.querySelector(`#post-${id} .post-body`).classList.replace('pb-ext', 'pb-hide');
    document.querySelector(`#post-${id} .post-extender`).style.top = '17%';
    document.querySelector(`#post-${id} .post-extender i`).style.color = 'var(--fontColor)';
  };
}
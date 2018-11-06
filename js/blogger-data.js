

blogPosts = []


fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    blogPosts.push(...data.items)
    loadPosts(blogPosts)
  });
function loadPosts(blogPosts){
  const blog = document.getElementById('blog')
  let output = ''
  let counter = blogPosts.length
  blogPosts.forEach(post => {

    const subtitle = extractSubtitle(post.content)
    const date = cleanDate(post.published)
    const body = parseBody(post.content)
    counter--
    output += 
     `<div class="blog-post" id="post-00${counter}" data-post-id="00${counter}">
     <span class="post-extender"><i class="fa fa-angle-right"></i></span>
     <div class="post-header"></div>
     <h2 class="post-title pt-hide">${post.title} | <span class="sub-title">${subtitle}</span></h2>
     <h2 class="post-date pd-hide">${date}</h2>
     <p class="post-body pb-hide">
      ${body}
     </p>
   </div>`
  console.log(counter)
  blog.innerHTML = output
  })
  displayBlogPosts()
}


function extractSubtitle(post){
  if(post == ''){
    console.log('no post available, please check your code and try again.')
  } else {
    const text = post;
    // closing </h2> tag
    const stringToMatch = '(<\\/h2>)';
    // searches post content for closing h1 tag
    const regex = new RegExp(stringToMatch, ["i"]);
    const match = text.split(regex)
    if (match != null) {
      // console.log(match)
      subtitleString = match.splice(0, 2).join('')
      // create ghost dom element
      let ghost = document.createElement('span')
      //set ghost html to subtitleString 
      ghost.innerHTML = subtitleString
      // pull text from html
      subtitle = ghost.textContent
      return subtitle
    } else {
      subtitle = 'No Subtitle Available'
    }
  }
}

function parseBody(post){
  if(post == ''){
    console.log('no post available, please check your code and try again.')
  } else {
    const text = post;
    // closing </h2> tag
    const stringToMatch = '(<\\/h2>)';
    // searches post content for closing h1 tag
    const regex = new RegExp(stringToMatch, ["i"]);
    const match = text.split(regex)
    if (match != null) {
      // console.log(match)
      bodyString = match.splice(1, 2).join('')
      return bodyString
    } 
  }
}

function cleanDate(date){
  cleanedDate = new Date(date).toLocaleDateString()
  return cleanedDate
}

document.addEventListener("DOMContentLoaded", function() {

  getCommits()
});

async function getCommits() {
  try {
    let res = await fetch("https://api.github.com/repos/abmakes/100-days-of-code/commits")
 
    if (!res.ok) {
      throw new Error(`Fetch Error: ${res.status}`);
    }
    let commits = await res.json();
    commits = commits.slice(0,-4)
    console.log(commits);
    
    const posts = document.getElementById("github-posts");

    commits.forEach(element => {
      let post = document.createElement('p')

      post.innerHTML = `
      <section class="blog-item">
        <article class="blog-content">
          ${element.commit.message}
        </article>
      </section>
      `
      
      posts.appendChild(post)
    });

  } catch(e) {
    console.log(e);
  }

}
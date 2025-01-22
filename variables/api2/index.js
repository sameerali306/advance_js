let base_url = "https://jsonplaceholder.typicode.com/posts";

// Make sure to handle post detail logic on page load
window.onload = function() {
  const postID = new URLSearchParams(window.location.search);
  const detailId = postID.get("id");

  if (detailId) {
    singlePost(detailId); // Pass the detailId to the function
  } else {
    document.getElementById("fetch_posts").addEventListener("click", () => {
      fetchPosts();
    });
  }
}

// Show the loader
// function showLoader() {
//   document.getElementById("loader").style.display = "flex";
// }

// Hide the loader
// function hideLoader() {
//   document.getElementById("loader").style.display = "none";
// }

// Fetch a single post based on the ID
async function singlePost(id) {
  // showLoader();  // Show the loader before starting the fetch
  try {
    const response = await fetch(`${base_url}/${id}`);
    if (response.ok) {
      const singleData = await response.json();
      console.log(singleData, "data");
      const singleDataPost = document.getElementById("post_detail");
      singleDataPost.innerHTML = `
        <h2> post ID: ${singleData.id}  </h2>
        <h3> post UserId: ${singleData.userId}</h3>
        <h5>   ${singleData.title}  </h5>
        <p>   ${singleData.body}  </p>
        `;
    } else {
      console.log("failed!");
    }
  } catch (error) {
    console.log(error);
  } finally {
    // hideLoader(); // Hide the loader after the fetch completes
  }
}
// document.getElementById("btn").addEventListener("click", (id)=>{
//   window.location.href = `postDetail.html?id=${id}`;
// });
// Fetch all posts
async function fetchPosts() {
  // showLoader();  // Show the loader before starting the fetch
  try {
    const response = await fetch(`${base_url}`);
    console.log(response, "res");
    if (response.status === 200) {
      const data = await response.json();
      let postCard = document.getElementById("post_container");
      postCard.innerHTML = ""; // Clear existing posts before adding new ones
      data.forEach((item, index) => {
        let card = document.createElement("div");
        card.className = "cards";
        card.id = `${item.id}`;
        card.innerHTML = `
          <div key=${index}>
            <h2> post ID: ${item.id}  </h2>
            <h3> post UserId:  ${item.userId}  </h3>
            <h5>   ${item.title}  </h5>
            <p>   ${item.body}  </p>
            <button onclick="viewSinglePost(${item.id})">view single post</button>
            <button onclick="deletePost(${item.id})">delete post</button>
          </div>
        `;
        postCard.append(card);
      });
    } else {
      console.log("failed");
    }
  } catch (error) {
    console.log("failed to fetch!");
  } finally {
    // hideLoader(); // Hide the loader after the fetch completes
  }
}

// Delete a post from the DOM
function deletePost(id) {
  console.log(id, "post id");
  const dltCard = document.getElementById(id);
  dltCard.remove();
}

// View a single post by redirecting to a detail page
function viewSinglePost(id) {
  window.location.href = `postDetail.html?id=${id}`;
}


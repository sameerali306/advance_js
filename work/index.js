let URL = "https://jsonplaceholder.typicode.com/posts";
let getfacts = async () => {
    const facts = document.getElementById("facts");
    facts.innerHTML = "";
    try {
        let response = await fetch(URL);
        if (response.ok) {  // Check if the posts fetch was successful
            let data = await response.json();
            data.forEach((item)=>{
                let card = document.createElement("div");
                card.className = "cards";
                card.id = `post-${item.id}`;
                card.innerHTML = `
                <div>
                    <h1 class="post">Post ID: ${item.id}</h1>
                    <h2  class="user">User ID: ${item.userId}</h2>
                    <h3>Title: ${item.title}</h3>
                    <h4 class="body">Body: ${item.body}</h4>
                    <h5>Comments:</h5>
                    <div id="comments-${item.id}"></div> <!-- Placeholder for comments -->
                </div>
                `;
                facts.appendChild(card);
                
            })
                
        } else {
            console.log("Failed to fetch posts");
        }
    } catch (error) {
        console.error("Error fetching posts or comments:", error);
    }
};
getfacts()
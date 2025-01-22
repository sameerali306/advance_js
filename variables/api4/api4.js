const URL="https://jsonplaceholder.typicode.com/posts";
const div=document.getElementById("#albums")
const btn=document.getElementById("#btn")
async function fetchPosts() {
    try {
        const responce=await fetch(`${URL}`)
        console.log(response, "res");
        if (responce.status===200) {
            const data=await responce.json();
            let postCard=document.getElementById("album")
            postCard.innerHTML=""
            data.forEach((item,index) => {
                let card=document.createElement("div")
                card.className="cards"
                card.id=`${item.id}`
                card.innerHTML=""
                `<div key=${index}>
                <h2> post ID: ${item.id}  </h2>
                <h3> post UserId:  ${item.userId}  </h3>
                <h5>   ${item.title}  </h5>
              </div>
            `;
            postCard.append(card);
                
            });
            
        } else {
            console.log("failed");
            
        }
    } catch (error) {
        console.log("fail to fetch");
        
    }
    
}
btn.addEventListener("click",fetchPosts)
window.onload=function () {
    document.getElementById("fact").addEventListener("click", ()=>{
       fetchData()
    })
    
}
async function fetchData() {
    try {
        const response=await fetch(URL)
        if (responce.ok) {
            let data=await response.json()
            allUsers=data.results
            displayUserCards(allUsers)
            document.getElementById("fact").style.display="none"

            
        } else {
            console.log("fail to fetch");
            
        }
        
    } catch (error) {
        console.log("fail to fetch",error);
        
    }
    
}

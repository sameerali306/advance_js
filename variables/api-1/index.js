const URL="https://cat-fact.herokuapp.com/facts"
const factpara=document.querySelector("#fact")
const btn=document.querySelector("#btn")
const facts=async ()=> {
    console.log("getting data....");
    
    let value=await fetch(URL)
console.log(value);
let data=await value.json();
factpara.innerText=data[0].text
console.log(data[1].text)
}

// function facts() {
//     fetch(URL)
//     .then((value)=>{
//         return value.json()
//     })
//     .then((data)=>{
//         console.log(data);
//         factpara.innerText=data[0].text;
        
//     })
// }
btn.addEventListener("click" ,facts)
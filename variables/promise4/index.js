let btn1=document.querySelector("#btn1")
const getpromise=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("i am a promise");
            resolve("success")
        
        }, 5000);
    })
}
console.log("data is fetching");

let promise=getpromise()
promise.then(()=>{
    console.log("your promise is resolve successfully")
})
promise.catch(()=>{
    console.log("your promise is rejected")
})

btn.addEventListener("click",getpromise)
let marks=56
let loadingstate="pending"
const displayname=new Promise((resolve, reject) => {
    console.log(`result is in ${loadingstate} `)
    setInterval(() => {
        if (marks>40) {
            resolve("Good you are pass")
            loadingstate="loading state is finish result is diplay on screen"
        } else {
            reject("sorry you are fail")
         loadingstate="loading state is finish result is diplay on screen"
        }
    }, 5000);

    
}).then((result)=>{
    console.log(result)
    console.log(`current state is: ${loadingstate}`);
    
}).catch((error)=>{
    console.log(error)
    console.log(`current state is: ${loadingstate}`);
})
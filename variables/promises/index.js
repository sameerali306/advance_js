function items() {
    let items=["sohail","shoaib","sameer" ,"sameer","ali"]
    return function () {
        return items.filter(items => items === "sameer" )

    
        
    }
}
let mon = items();
console.log(mon());


let fname="ali"
let loading="pending"

const display=new Promise((resolve, reject) => {
    console.log(`promise is in ${loading}`)
    setInterval(()=>{
        if (fname!=="ali") {
            resolve("ali your are excellent in coding")
            loading="complete"
        } else {
            reject("ali you enter in a wrong place ")
            loading="rejected"
        }
        counter++
    },3000)
   
}).then((massage)=>{
    console.log(massage)
    console.log(`current state is ${loading}`);
    setTimeout(display,2000)

    
}).catch((error)=>{
    console.log(error)
    console.log(`current state is ${loading}`);
    setTimeout(display,2000)
})


let counter = 0; // Global counter variable

function myFunction() {
  counter++; // Increment counter each time function is called
  console.log(`Function has been called ${counter} times.`);
  
  return new Promise((resolve, reject) => {
    // Simulating async operation with setTimeout
    setTimeout(() => {
      resolve("Function executed successfully");
    }, 1000);
  });
}

// Example usage
myFunction().then(console.log);
myFunction().then(console.log);
myFunction().then(console.log);

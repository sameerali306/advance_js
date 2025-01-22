let marks=prompt("enter your marks")
let loadingstate="pending"
const display=new Promise((resolve, reject) => {
    console.log(`Result is ${loadingstate}`);
    setInterval(() => {
        if (marks>=40 && marks<49) {
            loadingstate="Result is in process"
            // console.log("Congratulation you are pass ")
            // console.log("your Grade is D");
            resolve("your grade is D")
        } else if (marks>=50 && marks<59) {
            loadingstate="Result is in process"
            // console.log("Congratulation you are pass ")
            resolve("your Grade is C");
            
        } else if (marks>=60 && marks<69) {
            loadingstate="Result is in process"
            // console.log("Congratulation you are pass ")
            resolve("your Grade is B");
        } else if (marks>=70 && marks<79) {
            loadingstate="Result is in process"
            // console.log("Congratulation you are pass ")
            resolve("your Grade is A");
        } else if (marks>=80 && marks<89) {
            loadingstate="Result is in process"
            // console.log("Excellent  you are pass ")
            resolve("your Grade is A+");
        } else if (marks>=90 && marks<=100) {
            loadingstate="Result is in process"
            // console.log("Outstanding result you are pass ")
            resolve("your Grade is A++");
        } else {
            loadingstate="Result is in process"
            // console.log("Sorry your result is fail");
            resolve("nill");
            
        } 
    }, 5000);
   
}).then((massage)=>{
    console.log(massage)
    console.log(`current state is in ${loadingstate}`);
    }).catch((error)=>{
        console.log(error);
        console.log(`current state is in ${loadingstate}`);

    })
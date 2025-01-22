let agess=prompt("enter age to continue");
if (age>=15) {
    console.log("user can play boxing")
    
} else {
    console.log("user cannot play boxing")
    
}



// ternary oerator
let ages =prompt("enter value")
let drink=ages<20 ? "water":"wine"
console.log(drink)
let person=prompt("enter value for result")
let result=person>20 ? "young":"adult"
console.log(result)

let fname=prompt("enter your name to confirm")
let age=prompt("enter your age to confirm")
if(fname[0,5]==="s","r" && age>19){
    console.log("your are sameer")
}else{
    console.log("your are not sameer")
}

// nested if else
let winningnumber=50
let gussesnumber=+prompt("gain marks")
if (gussesnumber===winningnumber) {
    console.log("YOU WIN A CAR")
    
} else {
    if (gussesnumber>winningnumber) {
        console.log("THE NUMBER YOU ENTER IS TOO LARGE")
        
    } else {
        console.log("THE NUMBER YOUENTER IS TOO SMALL")
        
    }
    
}

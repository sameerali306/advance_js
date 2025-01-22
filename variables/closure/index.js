function my(power){
    function inner(number) {
        return number**power
    }
    return inner(3)
}
const inner=my(3)
console.log(inner)

function outer() {
    // let counter=0;
    return function inner() {
        if (counter<2) {
            console.log("Hi! you call me..")
            // counter++;
        } else {
            console.log("it is not good you call me again!..");
            
        }

    }
    inner()

}
const a=outer()
console.log(a())
console.log(a())
console.log(a())

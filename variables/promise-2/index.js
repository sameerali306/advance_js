
function outerfunction(age) {
const a="sameer";
const b="ali"
function innerfunction() {
    console.log(a,b,age)
    
}
return innerfunction()
}
outerfunction(19)

// class friends {
//     constructor() {
//         fname="ahsan"
//         lname:"hussain"
        
//     }
// }
// class friends2 extends friends{
//     /**
//      *
//      */
//     constructor() {
        
//         super(fname, lname,age);
//         this.fname="sameer";
//         this.age=30;
        
//     }
// }
// const zname = new friends(fname,age);
// console.log(zname)

// let obj={
//     name:"sameer",
//     age:30,
//     address:"jandrote"

// }
// function objj(givenName) {
//     this.name =givenName
// }
// obj.prototype.getName=function () {
//     return this.name;
// }

let family={
    name:"sameer",
    age:20,
    introduction(){
        return`my name is ${this.name} and my age is ${this.age}`
    }
}
let family2=Object.create(family);
    family.name="ali",
   family2. education="intermediat"
     family2.getDetail=function () {
        return`my name is ${this.name} and my age is ${this.age}`
     }
console.log(family2)
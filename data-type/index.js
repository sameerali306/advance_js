// primitive data type
let num1=4
let num2=num1
console.log("the value of num1 is" ,num1);
console.log("the value of num2 ",num2);
num1++;
console.log("after incrementing ");
console.log(num1);
console.log(num2);



// referance data type
let array1=["item1", "item2"]
let array2=array1
console.log(array1);
console.log(array2);
array1.push("item3")
console.log(array1);
console.log(array2);



// how we can concate an array
let array3=["item1","item2"]
let array4=["item1","item2"]
array4.push("item4")
console.log(array4,array3);

console.log(array3===array4);




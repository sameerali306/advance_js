let inputs=document.getElementById("#inp")
let text=document.querySelector(".text")
function add(){
    if(inputs.value==""){
        alert("Please Enter Task")
    }else{
        let n=document.createElement("ul");
        n.innerHTML=`${a.value}`;
        text.appendChild(n)
        n.value="";
    }
}
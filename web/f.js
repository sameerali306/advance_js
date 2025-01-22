// const res=document.querySelector(".mirza")
// // const r=console.log(grand-parent.child)
// const m=document.querySelector("GrandParent.child")
// console.log(m)
// // mirza.chid[0].style.backgroungColor="blue"/
// let a=document.getElementById("header")
// console.log(a)
// let b=document.getElementById("para")
// console.log(para)
// para.style.backgroundColor="green"
// header.style.backgroundColor="yellow"
// header.style.backgroundColor="red"
// console.log(document)
// le
// let m=header.getElementsByTagName("p")
// console.log(m)
// let res=document.getElementsByClassName("header")
// console.log(res)
// let div=document.querySelector("div")
// console.log(div)





// select para by class name
// let t=document.querySelector("p");
// console.log(t.getAttribute("class"))

// let h=document.querySelector("div")
// console.log(h)
// let res=div.getAttribute("id")
// console.log(res)
// let div=document.querySelector("div")
// console.log(div)
// div.style.backgroundColor="green"
// div.style.color="white"
// div.innerText="hello"
// div.style.visibility=""
// let btn=document.createElement("button");
// console.log(btn)
// btn.innerText="click";
// let div=document.querySelector("div")
// div.append(btn);
// consolelog
// const btn1=document.querySelector(".btn1")
// const btn2=document.querySelector(".btn2
// let a=setTimeout(function(){
//     alert("you are in a wrong place")

// },1000);
// let b=prompt("do you want to run the program")
// if("n"==b){
//     clearTimeout(a)
// }
// console.log(a)
// let word="  sameer      "
// console.log(word.lengt)
// let newword=word.trim();
// console.log(newword.length)
// word="faria"
// console.log(word.toUpperCase())
// word="GILGIT"
// console.log(word.toLowerCase())
// let words=word.slice(0,3)
// console.log(words)

// console.log(typeof (age + ""))
// let age =13;
// age=Number("13")
// console.log(typeof age)
// let a="20"
// let b="10"
// let c=+a+ +b
// console.log(c)
// let age=18;
// fname="sameer"
// let b=`my name is ${fname} and my is ${age}` ;
// console .log(b)
// let fname;
// console.log(typeof fname )
// fname="sameeer"
// console.log(typeof fname , fname)
// let g=BigInt(7)
// console.log(Number.MAX_SAFE_INTEGER)
// let d=7n
// console.log(g + d)


const todoinput=document.querySelector(".todo-input")
const todobutton=document.querySelector(".todo-button")
const todolist=document.querySelector(".todo-list")
const filteroption=document.querySelector(".todo-filter")


document.addEventListener("DOMContentLoaded",getLocalTodes)
todobutton.addEventListener("click", addTodo)
todolist.addEventListener("click", deleteCheack)
filteroption.addEventListener("change", filterTodo)


function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo")
    const newtodo=Document.createElement("li")
    newtodo.innerText=todoinput.value;
    newtodo.classList.add("todo-item")
    todoDiv.appendChild(newtodo)
    saveLocalTodes(todoinput.value)

    const completedButton=document.createElement("button")
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)
    

    const trashButton=document.createElement("button")
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)
    todolist.appendChild(todoDiv)
    todoinput.value=""
}
function deleteCheack(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("slide")
        removeLocalTodos(todo);
        todo.addEventListener("transitioned", function(){
            todo.remove();
        });

    }
    if(item.classList[0]==="comleted-btn"){
        const todo=item.parentElement
        todo.classList.toggle("completed");
    }
}
function todofilter(e) {
    const todos=todolist.childNodes;
    todos.forEach(function (todo) {
        switch(e.target.value){
            case"all":
            todo.style.display="flex";
            break;
            case"completed":
            if(todo.classList.cantainer("completed")){
                todo.style.display="flex"
            } else{
                todo.style.display="none"
            }
            break;
            case"incomplete":
            if(todo.classList.cantainer("completed")){
                todo.style.display="flex"
            }else{
                todo.style.display="none"
            }
            break;
        }
    });
    
}
function saveLocalTodes(todos){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push("todo");
    localStorage.setItem("todos",JSON.stringify("todos"))
}

function getLocalTodes(){
    let todos;
    if (localStorage.getItem("todos")==null) {
        todos=[];
        
    } else {
        todos=JSON.parse(localStorage.getItem("todos"));
}
todos.forEach(function (todo) {
    const todoDiv=document.createElement("div")
    todo.classList.add("todo");
    const newtodo=document.createElement("li");
    newtodo.innerText=todo;
    newtodo.classList.add("todo-item")
    todoDiv.appendChild(newtodo);

    const completedButton=document.createElement("button")
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild("comletedButton")

    const trashButton=document.createElement("button")
    trashButton.classList.add("complete-btn")
    todoDiv.appendChild("trashButton")

    todolist.appendChild(todoDiv)
})
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    const indextodos=todo.childern[0].innerText;
    todos.splice(todos.indexOf(indextodo),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}




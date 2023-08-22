//Tüm Elementleri seçmek
const forms=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clearButon=document.querySelector("#todoClearButton");

let todos=[];
runEvents();

function runEvents(){
    forms.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded)
    secondCardBody.addEventListener("click",removeTodoToUI)
}
function removeTodoToUI(e){
 if(e.target.className=="fa fa-remove"){
    const todo=e.target.parentElement.parentElement;
    todo.remove();
    removeTodoToStorage(todo.textContent);
    showAlert("success","başarılı şelikde silindi")
    console.log("çarpıya basmıştır")
 }
}
function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function (todo,index) {
        if(removeTodo===todo){
            todos.splice(index,1);
        }

    });
    localStorage.setItem("todos",JSON.stringify(todos));

}
function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function(todo){
       addTodoToUI(todo);

    }); 
}


function addTodo(e){
    const inputText=addInput.value.trim();    
    if(inputText==null || inputText== ""){
        showAlert("warning","Lütfen Bir Değer Giriniz")
    }else{
        //arayüze ve storageye eklemem gerek
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success","Todo Eklendi");
  

    }
    
    e.preventDefault();//farklı bir sayfaya  gitmesini engelliyoruz
}

function addTodoToUI(newTodo) {
    /*<li class="list-group-item d-flex justify-content-between">Todo 1
     <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
     </a>
   
    </li>*/ 
    const li=document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent=newTodo;

    const a=document.createElement("a");
    a.href="#";
    a.className="delete-item";

    const i =document.createElement("i");
    i.className="fa fa-remove";
    i.textContent="X";
    i.style.textDecoration="none";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
    addInput.value="";

}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if(localStorage.getItem("todos")=== null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));

    }
}


function showAlert(type,message) {
//     <div class="alert alert-warning" role="alert">
//     This is a success alert—check it out!
// </div>
    const div=document.createElement("div");
    // div.className="alert alert-"+type;
    div.className=`alert alert-${type}`;//litirel template
    div.textContent=message;
    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
        
    }, 2500);

}









//Style özelliğini Anlamak

const todo=document.querySelectorAll(".list-group-item")[0];
const todoList=document.querySelector(".list-group");
const clearButton=document.querySelector("#todoClearButton");


todo.style.color="#fff";
todo.style.backgroundColor="purple"
todo.style.fontWeight="bold";
todo.style.padding="20px"

todoList.style.marginTop="20px";
todoList.style.marginLeft="20px";


clearButton.style.backgroundColor="red";
clearButton.style.fontWeight="bold";
clearButton.style.paddingTop="10px";
clearButton.style.borderRadius="2px";   

console.log(todo)
console.log(todoList)
console.log(clearButton)


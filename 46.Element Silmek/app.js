//Element Silmek
//Todo1 i silcez
//2 farklı yöntemlede silinebiliyor
const todoList=document.querySelector(".list-group");
const todos=document.querySelectorAll(".list-group-item");
const todo1=document.querySelector(".list-group-item");
// todos[0].remove(); //1.yol
// todos[1].remove();
console.log(todos)

// todo1.remove(); // böylede silebiliriz

//-------------------------------------------------
// todoList.removeChild(todos[0]); //bu şekilde de silebiliriz

todoList.removeChild(todoList.lastElementChild); // son todoyu kaldırırır
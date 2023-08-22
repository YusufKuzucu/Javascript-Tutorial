//Dinamik olarak bir element oluşturma
const cardBody=document.querySelectorAll(".card-body")[1];
const todoList=document.querySelector(".list-group");
const link=document.createElement("a");
link.id="goBlogWebsite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target="_blank";
link.innerHTML="Kişisel Web site";
cardBody.appendChild(link); //appendChild = sonnuna ilave et sonuna ekle gibi


/* 
 <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>

*/
//todo5 ekledik
const todo=document.createElement("li");
const todoLink=document.createElement("a");
const i=document.createElement("i");
todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML="todo 5";

todoLink.href="#";
todoLink.className="delete-item";

i.className="fa fa-remove";

todoLink.appendChild(i); //i yi anın içine koydum
todo.appendChild(todoLink);//a yıda linin içine koydum

todoList.appendChild(todo);


console.log(todo);
console.log(cardBody);
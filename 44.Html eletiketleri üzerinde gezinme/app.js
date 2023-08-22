// Html elementleri üzerinde gezinme
//todo1 i yakalıyoruz
const todo=document.querySelector(".list-group-item");
const todoList=document.querySelector(".list-group");
const todoLastChild=document.querySelector(".list-group-item:nth-child(4)"); //sonuncu todoyu aldık

const cart=document.querySelector(".card")


let value;

//ebeveyin --> cocuklara  erişemek

// value=todoList;
// value=todoList.children; //cocukları yakaladık array şeklinde
// value=todoList.children[0];
// value=todoList.children[1]; //todolara eriştik  
// value=todoList.children[todoList.children.length -1]; //sonuncu cocuğu verir
// value=todoList.children[todoList.children.length -1].textContent="değişti";

// // value=todoList; //şuan bu array değil 
// value=Array.from(todoList.children); //cocukları array şeklinde geliyor bize
// value.forEach(function(todo){
//  console.log(todo.textContent) //todoların contentini yazdırdık
// })

//Cocuktan Anneye erişmek
value=todo;
// value=todo.parentElement; //anne elementini seç dedik ve annesini bize getirdi //ul.list-group
// value=todo.parentElement.parentElement; // annesini annesini aldık //div.card-body
// value=todo.parentElement.parentElement.parentElement; //div.card.w-100.mt-3 
// value=todo.parentElement.parentElement.parentElement.children; //div.card.w-100.mt-3  bunun cocuklarını buldum

//böylede değişkenlerdede tutabilirizs
let ul =todo.parentElement;
let cardBody=ul.parentElement;
let cardElement=cardBody.parentElement;


//Kardeşler arası gezinmek  
value=todo;
// value=todo.nextElementSibling; //sibling kardeş demek kendinden sonraki kardeişni getir demek
value=todo.nextElementSibling.nextElementSibling; //todo2 den todo3 e gider eğer sonuna kadar gideriz eğer sonuncudan sonra kardeş yoksa null döner
value=todo.nextElementSibling.nextElementSibling.nextElementSibling; 

//eğer todo1 e gelinde bidah previousElmentSibling yaparsak null alırız
value=todoLastChild.previousElementSibling; //geri gider todo4 den todo3 e gittik geri böyle böyle geri döneriz



//exapmles
//todo listesi yazasını değiştirmek
const rows=document.querySelector(".row")

value=rows.children; //rowun cocukları sadece bir tane var şuan oda şu = card.w-100.mt-3
value=rows.children[0].children; //çocuğunu getirdik ve kartın çocuklarınıda getirdik 4 tane çocuğu var 
//değiştirceğimiz yer 3.cü cocukta 
value=rows.children[0].children[3].children; // card-bodyi yakaladık ve onunda çocuklarını aldık

value=rows.children[0].children[3].children[0]; //ve istediğimiz yeri yakaladık ve textContentini değiştircem 
value=rows.children[0].children[3].children[0].textContent="Todo Listesi Başlığı değişti"; 




console.log(value)


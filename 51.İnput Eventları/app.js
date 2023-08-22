//input eventları

//focus
//blur
//copy
//paste
//cute
//select


//focus =imlec ile inputun içine girince tetiklenir
const todo=document.querySelector("#todoName");
// todo.addEventListener("focus",run);
// todo.addEventListener("blur",run); //blur ise inputtan çıkınca tetiklenir
// todo.addEventListener("copy",run); // inputun içindeki veriyi ctrl+c yaparsak tetiklenir    
// todo.addEventListener("paste",run); //inpute bir şeyi yapıştırınca çalışıyor
// todo.addEventListener("cute",run);//input içinde bir şey kesince tetiklenir
todo.addEventListener("select",run); //input içindeki veriyi mause ile seçince tetiklenir

function run(e) {
 console.log(e.type)
}
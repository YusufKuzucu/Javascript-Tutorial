//Klavye Eventları

//keypress =harf ve sayılarda tetiklenen bir eventdır
//klavyeden bir tuşa basınca tetiklenir

// document.addEventListener('keypress',run);
// function run(e) { 
//  console.log(e.type) //tipini verir keypresss
//  console.log(e.key) //klavyeden hangi tuşa basarsak onun değerini verir
// console.log(e.keyCode) //bastığımız tuşun ascıı ki karşılığındaki değeri verir
// console.log(e.which)// buda aynı ascıı karşılığını verir
// }



//keydown =ise harf sayı yön tuşları gibi herşeyde çalışan bir eventdır
//her tuşu algılar
// document.addEventListener('keydown',run);
function run(e) { 
//  console.log(e.type) //tipini verir keydown
//  console.log(e.key) //klavyeden hangi tuşa basarsak onun değerini verir
// console.log(e.keyCode) //bastığımız tuşun ascıı ki karşılığındaki değeri verir
// console.log(e.which)// buda aynı ascıı karşılığını verir
}



//keyup =tuştan elini kaldırdığında çalışan bir eventdır ve tüm karakterler çalışıyor

document.addEventListener('keyup',run);
function run(e) { 
//  console.log(e.type) //tipini verir keyup
 console.log(e.key) //klavyeden hangi tuşa basarsak onun değerini verir
//  console.log(e.keyCode) //bastığımız tuşun ascıı ki karşılığındaki değeri verir
//  console.log(e.which)// buda aynı ascıı karşılığını verir
}

//kullanıcı f5 e basmasını engelle
// document.addEventListener('keydown',run);
// function run(e) {
//   console.log(e.keyCode);
//   if(e.keyCode==116){
//     alert("sayfa yenilenmesi engellendi")
//   }
//   e.preventDefault();    
// }

//inputun içindeki değeri almak içinde bunu kullanıyoru<
// console.log(e.target.value);
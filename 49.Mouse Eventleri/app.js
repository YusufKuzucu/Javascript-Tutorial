//Mouse Eventleri

//DOMContentLoaded
//load
//click
//dbclick
//mouseover
//mouseout
//mouseenter
//mousedown


//1 - DOMContentLoaded
// document.addEventListener('DOMContentLoaded',run);
// function run() {
// //  alert("Sayfa Yüklendi")
// console.log("Sayfa Yüklendi")
// }


//2 load
// window.addEventListener('load',run);
// function run() {
//     console.log("sayfa yüklendi")

// }


//3 click and dblclick

//cift tıklayınca çalışcak
// const cardTitle=document.querySelectorAll('.card-title')[1];
// cardTitle.addEventListener('dblclick',run);
// function run(e) {
// console.log(e.type)
// }

//mouseover ve mouseout
// const cardBody=document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener('mouseover',run);
// cardBody.addEventListener('mouseout',run); //mouseover o elementin içinde gezinince tetiklenirken mouseout ise dışında gezinince tetikleniyor
// function run(e) {
//  console.log(e.type)
// }

//mouseenter ve mousedown

const cardBody=document.querySelectorAll(".card-body")[1];

cardBody.addEventListener('mouseenter',run);// cardboynin içine girince çalışır sadece cardBodynin içindeki elemtlere girince çalışmaz
cardBody.addEventListener('mouseleave',run); //cardbodynin dışında tetiklenir cardbodynin içindeki html etiketlerinde çalışmaz
function run(e) {
 console.log(e.type)
}















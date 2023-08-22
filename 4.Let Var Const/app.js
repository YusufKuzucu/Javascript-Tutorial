/* 

  -------Scope-----
   Global Scope -- heryerden erişebilirsin
   Function Scope -- fonksiyonun içinde erişebiliyoruz
   Blok Scope 

*/
// global scope
// var a=5;
// if(true){
//     console.log(a);
// }


// function Scope
// function method(){
//     var sayi=1;
//     console.log(sayi);
// }
// method();

// block scope
//içindekiler block scopedur

function method(){
    if(true){
       
    }
    while(true){

    }
    for(let i =0;i<=10;i++){
    }
}
method();



//   if (true) {
//     let blockVariable = 'Bu bir blok değişkenidir';
  
//     console.log(blockVariable); // 'Bu bir blok değişkenidir'
//   }
  
//   console.log(blockVariable); // Hata: blockVariable tanımlı değil
  

//   function outerFunction() {
//     var outerVariable = 'Dış değişken';
  
//     function innerFunction() {
//       console.log(outerVariable); // 'Dış değişken'
//     }
 
//     innerFunction();
//   }
//   outerFunction();
 


  
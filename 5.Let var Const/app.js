// Var Let Const

//var ile tanımladığımız herşey function scopedur block scope içinde tanımlarsakta function scopemuş gibi davranıyor
//ram bellekte çok fazla yer kaplar
// function selamVer(){
//    var selam="herkese merhaba";
//    if(true){    
//     var b=10;
//    }
//    console.log(b);
//    console.log(selam);
// }
// selamVer();


//let/const --block scope özelliğine sahiptir
// function selamVer(){
//     var selam="herkese merhaba";
//     if(true){
//      let b=10;
//      console.log(b);
//     }
//     if(true){
//         const c=10;
//         console.log(c);
//     }
//     console.log(selam);
//  }
//  selamVer();

// var a=5;
// var a=10;
// console.log(a); // 10 yazıcak varda bu şekilde aynı isimde değişken tanımlayabiliriz


// let b=10;
// let b=5;
// console.log(b); //let de böyle bişey yok hata veriyor 

// const b=5;
// const b=10;
// console.log(b); //const da da böyle bişey yok


//Let ve Const arasındaki fark ?
//const (constant) --sabit ,değişmez
// const b=10;
// b=1;
// console.log(b);// hata verir değiştiremeyiz değeri

//lette değiştirebiliriz


// const user={
//     userName:"yusuf",
//     password:"1223"
// }
// user.userName="ahmet"; //böyle değiştirebiliriz constta 
// console.log(user);




















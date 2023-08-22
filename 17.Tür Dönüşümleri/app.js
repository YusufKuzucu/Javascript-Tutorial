/* 
----------------Tür Dönüşümleri-----------
  strings,numbers,booleans,undefined and null.--primitiv veri tipleri 
  object,function --gelişmiş veri tipleri
*/

// let a=parseFloat(5.5);
// let b=parseInt("10");
// console.log(a+b);


//number->string
let x=String(55);
let y=(55).toString();
console.log(x)
console.log(typeof x)    

//boolean-->string

let sonuc=String(true);
console.log(sonuc)
console.log(typeof sonuc)


let a=Number("Baf")
console.log(a) //NaN Nate Number ->bir sayı değil
console.log(typeof a)


let rakamlar=String([1,2,3,4]);
console.log(rakamlar)
console.log(typeof rakamlar)

let rakam=Number([1,2,3,4])
console.log(rakam) //Nan 
console.log(typeof rakam)
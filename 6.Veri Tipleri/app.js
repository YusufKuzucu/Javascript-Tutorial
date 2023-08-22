/*
   ?Veri Tipleri

   1-string
   2-number
   3-boolean
   4-null
   5-Undefined
   6-Function
 */
let isim=123;
console.log(typeof isim); // tipini yazıcak 'number'


console.log(5>2); //boolean ->true yazcak 

let a=null;
a=12;
console.log(a);// null verdik sonra değer verdik 12 yazdı

let b;
console.log(b); // değer vermediğimiz için undifined yazıcak

//object 
let insan ={
    yaş:12,
    name:"yusuf",

}
console.log(insan);


let rakamlar=[1,2,3,4]
console.log(typeof rakamlar);

let func=function(){
    console.log("merhaba");
}
func();
console.log(typeof func);
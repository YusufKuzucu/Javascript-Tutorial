// ---------MANTIKSAL OPERATÖRLER

/* 
    && - Ve
    || - Veya
    !  - Değil
*/
//yaşınız 18 den büyükse ve 3000 tl para olması iki tarafada true olması gerek 
let yas=20;
let para=3500;
let saglikLiMi=true;
let haksayisi=3;    
console.log(yas>18 && para >3000 && saglikLiMi==true); //true sağladı demek hepsi sağladığı için true döndü
console.log(yas >18 || para>3000); //true döndü ikiside sağlandı -- ikisinden biri true ise sonuç yine true 
console.log(yas<18 || para<2000); //false oldu 

console.log(!(5>3)); //true ydu ! ile zıttını aldık false oldu 
console.log(!(saglikLiMi==true)); // false yazdı

console.log((yas>18 && para>3000)|| haksayisi>1); //true döndü

console.log(!(yas >19 && para>1000));
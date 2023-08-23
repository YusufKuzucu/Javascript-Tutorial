//1 den 10 a kadar yazdıralım

// let sayac=1;

// do{
//  console.log(sayac)
//  sayac++;
// }while(sayac<=10);

let yas=23;
do{
 console.log("Ehliyeti alabilirsiniz") //While false olduğu an döngü biter
}while(yas>=25);//yaşı yazdırdı sonra while geldi koşul sağlmadığı için döngü bitti ama bir kez çalıştırıyor bu döngü ne olursa olsun


while(yas<=25){
    console.log("yaş eşitmi")
    yas++;  
}


//1 den 20 ye kadar olan tek sayıların toplamını bulalım

let sayac=1;
let toplam=0;
do{
    if(sayac %2==1){
        toplam+=sayac
    }
    sayac++;
}while(sayac<=20);

console.log(toplam)
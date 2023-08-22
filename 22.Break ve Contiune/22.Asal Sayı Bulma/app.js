//Asal Sayı Bulma -> kendine ve başkasına bölünmeyen sayıdır
/* 
let sayı=Math.floor(1.9) --> 1 --> en küçük integer sayıya yuvarlar
*/
let sayi=Number(prompt("Lütfen bir sayı giriniz"))
let sonuc=true;
for(var i=2;i<=Math.floor(sayi/2);i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi + "Sayınız alsadır")
}else{
    alert(sayi + "sayı asıl değildir")
}
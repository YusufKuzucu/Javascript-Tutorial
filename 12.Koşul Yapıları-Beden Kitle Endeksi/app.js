//--- Beden Kitle Endeksi

let boy=Number(prompt("Boyunuzu metre cinsinden Giriniz"));
let kilo=Number(prompt("Kilonuzu Giriniz"));

let sonuc=kilo/(boy*2);

if(sonuc<18.5){
    console.log("ideal Kilonun altında",sonuc);
}else if(sonuc>=18.5 && sonuc<=24.0){
    console.log("ideal Kilonun altında",sonuc);
}else if(sonuc>=25 && sonuc<=29.9  ){
    console.log("ideal Kilonun ",sonuc);
}else if(sonuc>=30 && sonuc<=39.9){
    console.log("ideal Kilonun çok üstünde (obez)",sonuc);
}else if(sonuc>=40){
    console.log("ideal Kilonun çok üstünde(morbid obez)",sonuc);
}
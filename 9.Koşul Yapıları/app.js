// ------ Koşul yapıları

let vize1=Number(prompt("Vize1 not giriniz"));
let vize2=Number(prompt("Vize2 not giriniz"));
let final=Number(prompt("final not giriniz"));

let ortalama=(vize1*0.3)+(vize2*0.3) +(final*0.4);
if(ortalama>=60){
    alert("Harf notu A");
}else if(ortalama>=50){
  alert("harfNotu BB")
}else if(ortalama>=35){
 alert("harfNotu CC")
}else{
    alert("kaldınız");
}
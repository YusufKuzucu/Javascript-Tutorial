/* 
   ?Sorular
   1-Türkçe 40  -4 puan
   2-Matematik 40
   3-sosyal 20
   4-Fen 20

   ----> 100 puan ösym veriyor
   --- okul puanı max 60 veriyor



*/ 

let turkceDoğru,turkceYanlış=0;
let matematikDoğru,matematikYanlış=0;
let fenDoğru,fenYanlış=0;
let sosyalDoğru,sosyalYanlış=0;
let okulpuanı=0;
let puan=0;
let yenisatır="\r\n";
let mesaj="Tyt Puan hesaplamasına hoşgeldiniz"+yenisatır
+"1-puan Hesapla"+yenisatır
+"2-Çıkış Yap";
let secim=(prompt(mesaj));
switch(secim){
    case "1":

       okulpuanı=Number(prompt("Okul puanınızı giriniz"));
        turkceDoğru=Number(prompt("Türkçe doğru sayısı"));
        turkceYanlış=Number(prompt("Türkçe yanlış sayısı"));

        matematikDoğru=Number(prompt("Matematik doğru sayısı"));
        matematikYanlış=Number(prompt("Matematik yanlış sayısı"));
        
        sosyalDoğru=Number(prompt("Sosyal doğru sayısı"));
        sosyalYanlış=Number(prompt("Sosyal yanlış sayısı"));
        
        fenDoğru=Number(prompt("Fen doğru sayısı"));
        fenYanlış=Number(prompt("Fen yanlış sayısı"));

        let doğruSayısı=turkceDoğru+matematikDoğru+sosyalDoğru+fenDoğru;
        let yanlışSayısı=turkceYanlış+matematikYanlış+sosyalYanlış+fenYanlış;
        let kalanDoğruSayısı=doğruSayısı-(yanlışSayısı/4);
        puan=(kalanDoğruSayısı*4)+100+okulpuanı;
        alert("Tyt Puanınız : " +puan)


    break;
    case "2":
        alert("Ugulmadan çıkış yapıldı")
    break;
    default:
        alert("Lütfen geçerli aralıkta değer giriniz")

    break;
}
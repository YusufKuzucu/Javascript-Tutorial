//Benzin istasyonu

/*
  Dizel=24.53
  benzin=22.25
  lpg=11.1
  
  Müşteriden alacağımız bilgiler
  1-yakıt Tipi
  2-Yakıt litresi
*/
let dizel=24.53,benzin=22.25 ,lpg=11.1;
const yenisatır="\r\n";

const yakıtmetni="1.Dize"+yenisatır+
"2.benzin"+yenisatır 
+"3.lpg"+yenisatır
+"yakıt türünüzü seçiniz";

let yakıtTipi=prompt(yakıtmetni);
if(yakıtTipi=="1" ||yakıtTipi=="2"||yakıtTipi=="3"){
    let yakıtLitresi=Number(prompt("Yakıt Litresini Giriniz"));
    let bakiye=Number(prompt("Bakiyenizi Giriniz"));
    if(yakıtTipi=="1"){

        let odenecekTutar= dizel*yakıtLitresi;
        if(odenecekTutar<bakiye){
         bakiye=bakiye-odenecekTutar;
         alert("yakıt Alma işlemi başarılı"+yenisatır
         +"kalan Bakiye :"+(bakiye-odenecekTutar));
        }else {
         alert("Bakiye yeterli"+yenisatır
         +"Ödencek Tutar:"+odenecekTutar+yenisatır
         +"Bakiye:"+bakiye+yenisatır
         +"Eksik Tutar:" +(odenecekTutar-bakiye));
        }
     
     }else if(yakıtTipi=="2"){
     
      let odenecekTutar= benzin*yakıtLitresi;
        if(odenecekTutar<bakiye){
         bakiye=bakiye-odenecekTutar;
         alert("yakıt Alma işlemi başarılı"+yenisatır
         +"kalan Bakiye :"+(bakiye-odenecekTutar));
        }else {
         alert("Bakiye yeterli"+yenisatır
         +"Ödencek Tutar:"+odenecekTutar+yenisatır
         +"Bakiye:"+bakiye+yenisatır
         +"Eksik Tutar:" +(odenecekTutar-bakiye));
        }
     
     }else if(yakıtTipi=="3"){
     
         let odenecekTutar= lpg*yakıtLitresi;
         if(odenecekTutar<bakiye){
          bakiye=bakiye-odenecekTutar;
          alert("yakıt Alma işlemi başarılı"+yenisatır
          +"kalan Bakiye :"+(bakiye-odenecekTutar));
         }else {
          alert("Bakiye yeterli"+yenisatır
          +"Ödencek Tutar:"+odenecekTutar+yenisatır
          +"Bakiye:"+bakiye+yenisatır
          +"Eksik Tutar:" +(odenecekTutar-bakiye));
         }
     
     }
}else{
    alert("Yakıt tipi geçerli değil")
}


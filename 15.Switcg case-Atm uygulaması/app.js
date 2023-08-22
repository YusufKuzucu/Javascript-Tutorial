/*
1-Bakiye görüntüleme
2-para çekme
3-para yatırma
4-çıkış


Atm Uygulması
 */

let bakiye=1000;
let yenisatır="\r\n";
let metin="1-bakiye görüntüleme"+yenisatır+
"2-para çekme"+yenisatır+
"3-para yatırma"+yenisatır+
"4-çıkış"+ yenisatır+
"lütfen işlem tipini şeçiniz";

let deger=prompt(metin);
switch(deger){
    case "1":
        alert("bakiyeniz : "+bakiye)
    break;
    case "2":
        let cekim=Number(prompt("çekilecek tutar giriniz"));
        if(cekim<bakiye){
            bakiye=bakiye-cekim;
            alert(bakiye);  
        }else{
            alert("Bakiyenizden fazla para çekemezsiniz"+yenisatır+"Bakiyeniz :"+ bakiye+ " "+"Çekilecek tutar:"+cekim)
        }
    break;
    case "3":
        let tutar=Number(prompt("Yatırılacak tutarı Giriniz"));
        bakiye=bakiye+tutar;
        alert("Bakiyeniz:"+bakiye);
    break;
    case "4":
        alert("sistemden çıkış yapılmıştır")
    break;
    default:
        console.log("1-4 arasında değer seçiniz")
    break;            
}
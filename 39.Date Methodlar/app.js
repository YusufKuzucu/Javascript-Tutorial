//Date Kullanımı

let tarih=new Date();
let dTarih=new Date(2003,6,5,10,40,59);
console.log(dTarih) //Sat Jul 05 2003 10:40:59 GMT+0300 (GMT+03:00)

// console.log(tarih.getTime());
// console.log(tarih.getFullYear()); //yılını alıyoruz 2023
// console.log(tarih.getDate()); //günü alır 12
// console.log(tarih.getHours()); //saati alıyor 16 şuan
// console.log(tarih.getDay()); //haftanın gününü alır çarşamba -->3
// console.log(tarih.getMonth());   //ayları verirr 0 dan başlıyor ama saymaya
// console.log(tarih.getMinutes());   //dkika
// console.log(tarih.toLocaleDateString());   //12.07.2023
// console.log(tarih.toLocaleTimeString());   //16:23:05
// console.log(tarih.toLocaleString()); //12.07.2023 16:23:47
// console.log(tarih)


//Set Methodları
console.log(tarih)
// tarih.setHours(19) // 3 saat ileri aldık şuan 16.27 idi onu 19 a taşıdım
// tarih.setDate(24)
// tarih.setMonth(7) // agustos yaptım
// tarih.setMinutes(35) //dakikayı değiştirdim

tarih.setHours(tarih.getHours()+2) //güncel saate 2 saat daha ekledik
console.log(tarih)


































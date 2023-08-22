// let sayi=prompt("Lütfen 1-5 arasında bir sayı giriniz")
// //string olduğu için çift tırnak şeklinde yazdım
// switch(sayi){
//     case "1":
//         console.log("girilen sayı 1");
//     break;
//     case "2":
//         console.log("girilen sayı 2");
//     break;    
//     case "3":
//         console.log("girilen sayı 3")
//     break;
//     case "4":
//         console.log("girilen sayı 4");
//     break;
//     case "5":
//         console.log("girilen sayı 5")
//     break;
//     default:
//         console.log("girilen sayı istenilen değer arasında değil") 
//     break;       
// }

let yenisatır="\r\n";
let metin="1-pazartesi"+yenisatır
+"2-salı"+yenisatır+
"3-çarşamba"+yenisatır+
"4-perşembe"+yenisatır+
"5-cuma"+yenisatır+
"6-cumartesi"+yenisatır+
"7-pazar"+yenisatır+
"Lütfen bir seçim yapınız";

let deger=prompt(metin);
switch(deger){
    case "1":
        console.log("pazartesi günü")
    break;
    case "2":
        console.log("salı günü")
    break;
    case "3":
        console.log("Çarşamba günü")
    break;
    case "4":
        console.log("Perşmebe günü")
    break;
    case "5":
        console.log("cuma günü")
    break;
    case "6":
        console.log("cumartesi günü")
    break;
    case "7":
        console.log("pazar günü ")
    break;
    default:
        console.log("Gün seçiniz ")                    
    break;
}
// //Kelime sayısı bulma uygulaması

// let metin="şuan da yalovada javascript eğtimi çekmekteyim";
// let harf=prompt("Harf Giriniz");

// //CharAt methodu karakter veriyoruz içine bizden karakter ister
// let sonuc= bul(harf);
// console.log(sonuc)


// function bul(harf){
//     let toplam=0;
//     for(let i=0;i<metin.length;i++){
//         if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
//             toplam+=1;
//         }
//     }
//     return toplam;
// }   





























let metin="suan da yalovada okuyorum ";

let harf=prompt("Harf girin")

let sonuc=bul(harf);
console.log(sonuc)
function bul(harf){
  let toplam=0;
    for(let i=0;i<metin.length;i++){
        if(metin.charAt(i)===harf){
            toplam+=1;
        }
    }
 return toplam;
}





























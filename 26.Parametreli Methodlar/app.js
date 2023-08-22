//parametreli Methodlar

// function yazdır(isim,soyisim){
//     console.log(isim+" "+soyisim)
    

// }
// yazdır("yusuf","kuzucu  ");
// yazdır("ali","cevher  ");


// function cube(sayi){
//  console.log(sayi*sayi*sayi)
// }
// cube(5); //---> 125

let yas=Number(prompt("Yaşınızı giriniz"))
function kontrolEt(yasınız){
    if(yasınız=>18){
        console.log("Ehliyeti alabilirsiniz")

    }else{
        console.log("Ehliyet alamazsın")
    }
}
kontrolEt(yas)
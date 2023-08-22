// geriye değer döndüren methodlar


let donendeger=cube(2);
console.log(donendeger)

kareAl(donendeger);
function kareAl(sayi){
    let sonuc=sayi*sayi;
    console.log(sonuc);
}

//methodu başka methodun içinde de kullanabiliriz
function cube(sayi){
    let sonuc=sayi*sayi*sayi;
    return sonuc;

    console.log("faefa") //--> Returnden sonra hiçbir kod çalışmaz erişilmez
}

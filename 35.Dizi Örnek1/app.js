let urun1={
    isim:"Acer Swift",
    kategori:"Teknoloji",
    fiyat:6.000
}
let urun2={
    isim:"Acer Nitro 5",
    kategori:"Teknoloji",
    fiyat:15.000
}
let urun3={
    isim:"Acer Gaming Aspire",
    kategori:"Teknoloji",
    fiyat:13.999
}
let urun4={
    isim:"Lenovo V15",
    kategori:"Teknoloji",
    fiyat:10.999
}

let urun5={
    isim:"Lenovo V14",
    kategori:"Teknoloji",
    fiyat:4.995
}
let urun6={
    isim:"Lenovo Ideapad",
    kategori:"Teknoloji",
    fiyat:4.551
}
let urun7={
    isim:"Asus Tuf",
    kategori:"Teknoloji",
    fiyat:20.000
}

let urunler=[urun1,urun2,urun3,urun4,urun5,urun6];

let filtreliUrunler=[];

let kullaniciUrunIsmi=prompt("Bir Ürün İsmi Giriniz");


filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
    
        }
    });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urunn,index) {
        console.log("--------------------------------------")
        console.log("|"+urunn.isim + "|"+urunn.fiyat + "|"+urunn.kategori)
        console.log("index:" + index)
        console.log("--------------------------------------")

    });
}



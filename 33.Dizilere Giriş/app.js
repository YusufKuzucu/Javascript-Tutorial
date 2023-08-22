// Dizilere Giriş
//javascripte aray içinde illa int veya string olmasına gerek yok ikiside bulunabilir
//sayılar[100] arayim içinde böyle bir index yok o yüzden undifined döner geri
let sayilar=[0,1,2,3,4,"Ali",6,7,8,"Mehmet"]
// sayilar[8]=10;
// sayilar[sayilar.length-1]="yusuf"; // mehmet yusuf oldu
// console.log(sayilar[sayilar.length-1]) // bize en son indexdeki değeri verir önce length ile sayısını alır sonra bir indirir değeri verir bize
console.log(sayilar[8])



let isimler=["enes","kübra","hilal","yusuf"];


console.log(isimler[3]) //---> yusuf

let karışıkDizi=[1,"strihg",true,null,undefined]


let personel1={
    isim:"yusuf",
    soyisim:"kuzucu",
    yas:20
}
let personel2={
    isim:"ahmet",
    soyisim:"ak",
    yas:20
}

let rakamlar=[0,1,2,3,4,5,6,7,8,9]

let personelArray=[personel1,personel2,1,true,rakamlar];
console.log(personelArray[4][5])
console.log(personelArray[1].isim) //---> ahmet


let dizi=[];
let dizi2=new Array();
console.log(typeof dizi) //---> object


//FOREACH Döngüsü
//dizilerde kullanıyoruz

let isimler1=["enes","yusuf","ahmet","yagmur"]
isimler1.forEach(function(isim){
  console.log(isim)
});

// for(let i=0;i<isimler1.length;i++){
//     console.log(isimler1[i])
// }

let sayac=0;
while(sayac<isimler1.length){
    console.log(isimler1[sayac]);
    sayac++;
}
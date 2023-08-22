//Değer ve Referans Tipleri
//referans tip =object ,array ,Function
let dizi=[1,2,3,4,5]
let obje={
    isim:"yusuf",
    soyisim:"kzc"
}
function method(){

}

// ikisini adresleri farklıdır  
let dizi1=[1,2,3];//101.adres 
let dizi2=[1,2,3];//102. adres
dizi2=dizi1;
if(dizi1==dizi2){
    console.log("eşittir")
}else{
    console.log("eşit değildir")
} //sonuç eşit değildir çünkü ikisinin bellekteki adresleri farklıdır
console.log(dizi2)




let dizii=[1,2,3];
let diziii=dizii;
diziii.push(12);

console.log(dizii)//[1, 2, 3, 12]
console.log(diziii)//[1, 2, 3, 12] //ikisinede 12 eklendi

//değer tipler=string,number,boolean,null, undefined

let a=7;
let b=a;

console.log(a)
console.log(b)
b=10;
console.log(b); // 10 oldu

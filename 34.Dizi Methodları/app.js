//Dizinin Methodları

/* 
push: dizinin sonuna eleman ekler,ayrıca dizinin uzunluğunu döner
unshift:dizinin başına eleman ekler,eleman sayısını geriye döner

pop:diznin sonundan eleman siler,eleman sayısını döner
shift:dizinin başından eleman siler,eleman sayısını döner

splice(index,incdex):eleman ekleme ve silmek için kullanılır başına ekler

toString:diziyi stringe çevirebiliriz
join:diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz

concat:dizileri birleştirmek için kullanılır

slice(dilimlemek):diziyi istenilen yerden bölüp yeni bir dizi oluşturur
length:dizinin uzunluğunu verir
reverse:dizinin elemanklarını ters çevirmek
split(bölmek):belirli bir ifadeye göre bölüp diziye çevirmek
indexof:elemanın index numarasını verir
ıncludes:verilen elemanı içeriyormu ona bakılır

*/

let arablar=["bmw","toyota","renault","mercedes","porsche"];

//PUSH method

// let uzunluk =arablar.push("togg");
// console.log(uzunluk) //---- 6


//Unshift method
// arablar.unshift("tesla");
// console.log(arablar);

//pop methodu
//porsche sildi
// let silinen elaman=arablar.pop();  silinen elemanı geri döner 

//Shift methodu 
//bmw yi siler
// let silineneleman =arablar.shift();
// console.log(silineneleman); -- silenen eleman bmw


//Splice method
// console.log(arablar)
// arablar.splice(1,2);//birinci indexden sonra iki tane eleman sil diyoruz
// arablar.splice(0,0,"hundai")
// arablar.splice(2,0,"hundai") 2.ci indexden sonra hundaiyi ekle

//toString methodu
// let arabalarr=arablar.toString();
// console.log(typeof arabalarr)

//Join methodu
// let gerideger=arablar.join("-");
// console.log(gerideger)
// console.log(arablar)

//concat method
// let arabalar2=["hundai","elentra","passat"]
// let birleşmişdizi=arablar.concat( arabalar2);
// console.log(birleşmişdizi);


//Slice methodu
// let ayrıdizi=arablar.slice(2); //['renault', 'mercedes', 'porsche']
// console.log(ayrıdizi)


//Length methodu
// console.log(arablar.length)

//Reverse methodu 
// arablar.reverse();

//split methodu -- array'e cevirdim
// let isimler="enes,ali,veli";
// let array=isimler.split(",");    
// console.log(array);
 
//İndexof methodu  -- değer varsa 0 eğer yoksa -1 döner 
// let index=arablar.indexOf("bmw");
// console.log(index)

//Includes methodyu     --- eğer varsa true yoksa false döner
// let sonuç=arablar.includes("porsche");
// console.log(sonuç)




console.log(arablar )
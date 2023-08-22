//SET 

/* 
JavaScript'te Set, benzersiz değerleri saklayan bir veri yapısıdır. 
Bir Set, aynı değeri birden fazla kez içermeyen bir koleksiyon olarak kullanılır. Set'in ana amacı, koleksiyon
 içinde tekrarlayan değerlerin önlenmesi ve birçok farklı veri tipini depolamak için kullanılmasıdır. 
 */

 const set =new Set();
 set.add(3.14);
 set.add("merhaba");
 
 set.add(true);
 set.add('H');
 set.add({firstName:"yusuf",password:123});
 set.add([1,2,3,4])

//  console.log(set.size) //6 merhaba değerinin 3 tane yazdım ama bir kere saydı ve 6 olan size değişmedi

 // Değerin Set içinde olup olmadığını kontrol etme
// console.log(set.has("merhaba")); // Çıktı: true
// console.log(set.has(false));     // Çıktı: false

// Değeri Set'den silme
// set.delete(3.14); //silinince size bir azaldı
// console.log(set.size) 

// Set'in tüm değerlerini döngü ile dolaşma
// set.forEach(value => {
//   console.log(value);
// });

// Set'i boşaltma
// set.clear();

// const array=Array.from(set)
// array.forEach((set)=>{
//     console.log(set)
// })
// console.log(array)







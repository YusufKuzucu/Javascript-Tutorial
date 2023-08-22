//MAP ---> key(anahtar) value(değer) //arrayin bir alternatifidir 

let map1=new Map();
let value;
//SET 
// map1.set("a",1)
// map1.set(true,false)
// map1.set([1,2,4],{firstName:"yusuf"})


map1.set(34,"istanbul")
map1.set(35,"izmir")
map1.set(6,"ankara")
map1.set(1,"adana")



//GET
console.log(map1.get(1))//adana
console.log(map1.get(34))//istanbul

// let values=map1.get(34)
// console.log(values)//istanbul

//size

// value=map1.size;//4 4 tane map var
//delete
// value=map1.delete(6)//true dönüyor başarılı yani


//has
// console.log(map1.has(35)) //true yani sahip

//For of map üzerinde dönebiliriz
// for(let [key,value] of map1){
//     console.log(key,value) //key ve value değerlerini yazdırıyoruz
// }


// const keys=Array.from(map1.keys());

// console.log(keys)
// keys.forEach((key) => {
//     console.log(key,map1.get(key))
// });

// for (let key of map1.keys()) {
//     console.log(key)
// }

// for (let value of map1.values()) {
//     console.log(value)
// }



//Mapten Arraye çevirmek

// const array=Array.from(map1);
// array.forEach((value)=>{
//     console.log(value)
// })

//bir arrayi map e de çevirebiliriz

// const array=[
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [6,"Ankara"]
// ];

// const myMap=new Map(array);
// console.log(myMap)

// const myArray=Array.from(myMap);
// console.log(myArray)

const map2=new Map()
map2.set(1,"adana")

const map3=new Map(map2)
map3.set(9,"ads")
// map3.set=map2;
console.log(map2)
console.log(map3)



let key=[1,2,3]
map1.set(34,"istanbul")
map1.set(35,"izmir")
map1.set(6,"ankara")
map1.set(key,"adana")
console.log(map1.get(key))
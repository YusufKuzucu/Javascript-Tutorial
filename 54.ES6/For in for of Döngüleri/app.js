//For in - For of Döngüleri


let names=["yusuf","ahmet","ayşe","betül","ceyda"]
// names.forEach(function(name){
//     console.log(name)
// })

// names.forEach(name=>console.log(name))



//for in döngüsü
//o dizinin elemanının index numarasını verir
// for(let name in names){
//  console.log(name,names[name])
// }

//for of döngüsü

for(let isim of names){
    console.log(isim,names.indexOf(isim))
}





//spread operatörüs  ...


let numbers=[10,20,30,40]
function add(a,b,c,d){
console.log(a+b+c+d)
}

//eski yöntem
// add(numbers[0],numbers[1],numbers[2],numbers[3])

//yeni yöntem
add(...numbers)
/*  
  ...number ->  ---numbers[0],numbers[1],numbers[2],numbers[3] 

*/
const diller1=["java","c#"]
// const diller2=["php","python",diller1[0],diller1[1]]
const diller2=["php","python",...diller1]
console.log(diller2)

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const combinedObj = { ...obj1, ...obj2 }; // { x: 1, y: 2, z: 3 }

const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']

const diller=["C#"]
const diller23=["java",...diller]
console.log(diller23)





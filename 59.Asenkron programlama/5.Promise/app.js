//? ----Promise---
//asenkrron yapıları senkrona çevirmek için kullanıyoruz
//ES6
let check=true;


// const promis1=new Promise((resolve,reject)=>{
//     if(check){
//         resolve("promis başarılı")
//     }
//     else{
//         reject("promise başarısız")
//     }

// })
   
// console.log(promis1)



// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("herhangi bir sıkınıtı yok ")
//         }
//         else{
//             reject("sıkıntı büyük")
//         }
//     })
// }

// createPromise()
// .then((response)=>{
//     console.log(response)

// })
// .catch((error)=>{
// console.log(error)
// })
// .finally(()=>console.log("her zmaan açlışır"))


//? promise + xmlhttprequest

// function readStudents(url){
//     return new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();
//        try {
//         xhr.addEventListener('readystatechange',()=>{
//             if(xhr.readyState===4 && xhr.status===200 ){
//                 resolve(JSON.parse(xhr.responseText))
//             }
//         })
//        } catch (error) {
//         reject(xhr.error)
//        }
//        xhr.open("GET",url)
//        xhr.send();
//     })

// }

// readStudents("students.json")
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })



function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.addEventListener('readystatechange',()=>{
           try {
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText))
            }
            
           } catch (error) {
            reject(error)
           }
        })
        xhr.open("GET",url)
        xhr.send()
    })

}
//birden fazla then kullanilabilir
getUsers("https://jsonplaceholder.typicode.com/users")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
.finally(()=>console.log("herzaman çalışır<"))



const promis1=Promise.resolve("birinci promis başarılı");
const promis2=Promise.resolve("ikinci promis başarılı");
const promis3=new Promise((resolve,reject)=>{
    resolve("üçüncü promis başarılı")
})

//3 cüde resolve ise then biribire hatalı ise catch e girer 
Promise.all([promis1,promis2,promis3])
.then((res)=>{
    console.log(res)
    for (const value of res) {
        console.log(value)
    }
})
.catch()




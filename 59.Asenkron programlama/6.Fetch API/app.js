//?----- FETCH API----- 

//callback -> promise
//ajax(xmlhttprequest) -> fetch apı

// function getStudents(url){
//    const promise=fetch(url)
//    .then((response)=>{
//     return response.json()
    
//    })
//    .then((data)=>console.log(data))
//    .catch((error)=>console.log(error))
// }

// getStudents("studenst.json");


function getUsers(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
}
getUsers("https://jsonplaceholder.typicode.com/users")
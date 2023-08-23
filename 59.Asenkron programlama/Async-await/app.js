//? async Await

//promis then zinciri

//promis döner
// async function hello() {return "hello world" }
// hello()
// .then((response)=>console.log(response))

// document.querySelector("#button").addEventListener("click", ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>response.json())
//     .then((post)=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response)=>response.json())
//         .then((data)=>{
//             console.log(data)
//         })
//     })
// })

//asyn await ile yapılışı
document.querySelector("#button").addEventListener("click",async ()=>{
  const post=await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  const Comments=await(await  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
  console.log(Comments)
})













//Asenkron prolemi

//http istekleri

const users=[
    {
        userId:5,
        post:"yusuf post 1"
    },
    {
        userId:5,
        post:"yusuf post 2"
    },
    {
        userId:5,
        post:"yusuf post 3"
    },
    {
        userId:5,
        post:"yusuf post 4"
    },
    {
        userId:6 ,
        post:"ali post 1"
    },
    {
        userId:7,
        post:"betül post 1"
    },
]


function getUserId(){
    setTimeout(() => {
        //servise gittik ve cevabı aldık
      return 5;
         
    }, 1000);
}

function getPostByUserId(userId){
   setTimeout(() => {
    users.forEach((user)=>{
        if(user.userId===userId){
            console.log(user.post)
        }
    })
   }, 500);
}

let userId=getUserId();
await getPostByUserId(userId);
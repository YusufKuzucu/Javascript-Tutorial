//AJAX
function prepareURL(url,id){
    if(id===null){
        return url
    }

    return `${url}?postId=${id}`
}


function getComments(url,id){
    let newUrl=prepareURL(url,id)
    const xml=new XMLHttpRequest();
    xml.addEventListener("readystatechange",()=>{
        if(xml.readyState==4 && xml.status==200){
            console.log(xml.responseText)
        }
    });
    xml.open("GET",newUrl)
    xml.send()

}

getComments("https://jsonplaceholder.typicode.com/comments",null)
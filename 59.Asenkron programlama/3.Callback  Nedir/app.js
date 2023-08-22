//CALLBACK NEDİR
//callback bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkron yapıya çevirir
//bu iki fonksiyonun maliyeti 1,5 saniye
function getName(callback){
    setTimeout(() => {
    let name="yusuf";
    callback(name)
    }, 1000);
}
function getSurname(name){
    setTimeout(() => {
        let surName="kuzucu"
        console.log(name,surName)
            
        }, 500);
}

const a=()=>{

}
// getName(getSurname)  
getName(()=>{})



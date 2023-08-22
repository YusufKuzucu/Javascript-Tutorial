//Event olayı

// function changeTitle() {
//  document.querySelectorAll('.card-title')[1].textContent="Todo Listesi Değişti";
//  console.log("Başlık değişti")
  
// }

//addEventListener() -->event dinleyicisi eklemek 
//burada ilk butonun id sine eriştim ve addEventListenir a click olayını yazdık ve virgülden sonrakini çalıştırır
// const cleatButton=document.querySelector("#todoClearButton");
// cleatButton.addEventListener("click",function(){
//     alert("merhaba")
// });

//böyle kullanılması yukarıdakine göre daha iyi 

// const clearButton=document.querySelector("#todoClearButton");
// clearButton.addEventListener("click",changeTitle);//methodun () bunları koymadan yazmamız gerek

// function changeTitle() {
//  document.querySelectorAll('.card-title')[1].textContent="Todo listesi Değiştirrrr"
// }



//eventin özelliklerini alabiliriz

const clearButton=document.querySelector("#todoClearButton");
clearButton.addEventListener("click",changeTitle);//methodun () bunları koymadan yazmamız gerek

function changeTitle(e) {// burada illa e parametresi ile değil farklı parametre ismide verebiliri
 console.log(e)    
 console.log(e.type) //click döner
 console.log(e.target)//<a href="#" id="todoClearButton" class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a> eventin çalışmış olduğu html elemtini veririr
 console.log(e.target.textContent) //dönen html etiketinin textContentini alabiliriz =Tüm Todoları Temizle
 console.log(e.target.className)// clas namesinide alabiliriz btn btn-primary btn-sm mt-3
}






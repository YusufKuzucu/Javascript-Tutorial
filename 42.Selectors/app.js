//Selectros (Seçiciler) - style özellikleri

//classname - tag name -id

//getElementById : id ye göre elementi yaklar
//getElementByTagName:Etiket ismine göre yakalar


const button=document.getElementById("todoAddButton"); //bu id ye sahip elementin tamamını getirdi button#todoAddButton.btn.btn-primary.mt-4.btn-sm
// console.log(button);
// console.log(button.id);//todoAddButton
// console.log(button.getAttribute("id")) //todoAddButton üsteki kodla aynı aslında
// console.log(button.className) //btn btn-primary mt-4 btn-sm butonun class özeliklerini aldık
// console.log(button.getAttribute("class")) // aynı sonucu verdi yukarıdaki ile  btn btn-primary mt-4 btn-sm

// const classListesi=button.classList;//DOMTokenList(4) ['btn', 'btn-primary', 'mt-4', 'btn-sm', value: 'btn btn-primary mt-4 btn-sm']

// const classListesi=button.classList[1]; //btn-primary
// const classListesi=button.classList[2]; //mt-4


// const classListesi=button.classList; // tüm class isimlerini yazdırdık
// classListesi.forEach(function (className) {
//     console.log(className)

// })


// let butonText=button.textContent; //butonun textini aldık Todo Ekleyin
// let butonText2=button.innerHTML; 
// console.log(butonText); 
// console.log(butonText2); 


// button.textContent="<b>Todo Ekleyin</b>"; //<b>Todo Ekleyin</b> böyle oluyor
// button.innerHTML="<b>Todo Ekleyin</b>"; //kalın hale getirdi Todo Ekleyin'i



// const todoList=Array.from(document.getElementsByClassName("list-group-item")); //Array e çevirdim
// todoList.forEach(function (todo) {
//     console.log(todo.textContent);

  
// });
// console.log(todoList)



// const forms=document.getElementsByTagName("form");
// console.log(forms); //form üzerinde foreach kullanabiliriz forms[1].id sini alabiliriz

// const li=document.getElementsByTagName("li");
// console.log(li) // li leri bulduk



//getElementById - getElementByTagName-getElementByClassName 
//querySelector -querySelectorAll // bu ikisi yukarıdaki 3 cünün yaptığı işi yapıyorlar
    
// const clearButon=document.querySelector("#todoClearButton");
// console.log(clearButon)


// const todoList=document.querySelector(".list-group");
// console.log(todoList) // ul tagına clas ismi ile eriştik


// const todoList=document.querySelector(".list-group-item ");// bu class isminden 4 tane var ama bize ilkini getirdi
//hepsini görmek istiyorsam querySelectorAll kullanmam gerek
// const todoList=document.querySelectorAll(".list-group-item ");//hepsi geldi
// console.log(todoList);

//bu seçitğim listedekilerin 3.cüsüne ulaşmak istiyorum nasıl yapardım
// const todoList=document.querySelectorAll(".list-group-item ")[2];
// console.log(todoList)

//sondakini yakalamak içinde şunu kullanabiliriz
// const todoList=document.querySelectorAll(".list-group-item ")[document.querySelectorAll(".list-group-item ").length -1];//hepsi geldi
// console.log(todoList)

//cocuk getirme
// const todoList=document.querySelectorAll("li:first-child"); //ilk çocuğu getirir
// const todoList=document.querySelectorAll("li:last-child"); //son çocuğu getirir
// const todoList=document.querySelectorAll("li:nth-child(2)"); //ikinci çocuğu getirir



//odd ve even
// const todoList=document.querySelectorAll("li:nth-child(odd)"); //bir ve ücüncü cocuğu seçer sonra 5 7 ...
// const todoList=document.querySelectorAll("li:nth-child(even)"); //2 4 6 8 .... gider

const todoList=Array.from(document.querySelectorAll("li:nth-child(even)"));
todoList.forEach(function (todo){
    todo.style.backgroundColor="lightgrey";
})

console.log(todoList)






//Documenet Objesi

// console.log(window)

let value;

console.log(document)

// value=document.location.href;
// value=document.location.port;
// value=document.location.hostname;
// value=document.location.pathname;

value=document.characterSet; //UTF-8 sonucu utf-8 türkçe karakterleri desteklemesi için kullanırız
value=document.title; //Document sonuc
value=document.links; // sayfada kaç tane a etiketi var onu gösteriyor ve name yada idsinide yazar
value=document.links[0]; //bu kullanımıda var 0.cı indexdekini getirir
value=document.links.item(1); //burada elementi yakalıyoruz itemi bize veriyor
value=document.links.item(1).id; // id atributesinide alabiliyoruz
value=document.links.item(1).getAttribute("id");// id atributünün değerini getiriyoruz
value=document.links.item(1).getAttribute("class"); //clasını getiriyoruz    
value=document.links.item(1).classList[0]; //clasın sıfırıncı idexinin değerini aldık


// value=document.forms; //html üzerindeki formları yakalayabiliyoruz
// value=document.forms.item(1);
// value=document.forms.item(1).id;



value=document.contentType;

console.log(value   )
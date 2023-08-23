// ------ÇOKLU İF KULLANMAK


// let ad=prompt("Adınızı Giriniz");   
// // let tckn=prompt("Tc Kimlik Numaranızı giriniz");

// if(ad==""){
//  alert("Adınızı giriniz");
//  ad=prompt("Adınızı Giriniz");  
// }

// let tckn=prompt("Tc Kimlik Numaranızı giriniz");
// if(tckn.length>11){
//  alert("11 haneli tc giriniz");
//  tckn=prompt("Tc Kimlik Numaranızı giriniz")
// }
// if(tckn.length<11){
//   alert("11 hane giriniz")
//  tckn=prompt("Tc Kimlik Numaranızı giriniz")
// }
// console.log(ad);
// console.log(tckn);

// let ad = prompt("Adınızı Giriniz");
// while (ad === "") {
//     alert("Adınızı giriniz");
//     ad = prompt("Adınızı Giriniz");
// }

// let tckn = prompt("Tc Kimlik Numaranızı giriniz");
// if (tckn.length !== 11) {
//   alert("11 haneli tc giriniz");
//   tckn = prompt("Tc Kimlik Numaranızı giriniz");
// }


let ad=prompt("Adınızı Giriniz");   

let tckn=prompt("Tc Kimlik Numaranızı giriniz");
KontrolEt(ad,tckn);
function KontrolEt(ad,tckn){
    if(ad==""){
        alert("İsim Doldurunuz");
        ad=prompt("Adınızı Giriniz");
    }

    if(tckn.length>11){
        alert("Lütfen 11 Haneli Tc Kimlik Numaranızı giriniz");
        tckn=prompt("Tc Kimlik Numaranızı giriniz");
    }else if(tckn.length<11){
      alert("11 Haneli tc kimlik numaranızı giriniz");
      tckn=promt("Tc Kimlik Numaranızı giriniz");
    }
    console.log(ad);
    console.log(tckn);

}


//Session Storage Kullanımı

//değer ekleme 
sessionStorage.setItem("name","yusuf");
sessionStorage.setItem("Surname","kuzucu");
sessionStorage.setItem("password","yusuf1234");
sessionStorage.setItem(123,12);//bu şekildede numeric olsa dahi kabul eder


//değer silme
// sessionStorage.removeItem("password")
const isim=sessionStorage.getItem("name"); //eğer böyle key yoksa null dönecektir
console.log(isim) // ismi aldım yusuf


//sessionStoragedeki tüm değerleri siler
// sessionStorage.clear();


//sessinStorega array yazdırma
let names=["ali","ayşe","yusuf"]
sessionStorage.setItem("names",JSON.stringify(names));//array gibi yazdırdık normal string yazdırmadık

let value=JSON.parse(sessionStorage.getItem("names")); //string geri dönücekti Json.parse methodu ile array'e çevirdik ve istediğimiz gibi aldık
console.log(value) //string şekilde geri verdi





//LocalStorage Kullanımı
localStorage.setItem("name","yusuf");
localStorage.setItem("surName","kzc");
localStorage.setItem("password","yusuf12");

//değeri almak
// const deger=localStorage.getItem("name");
// console.log(deger)

//değer silmek
// localStorage.removeItem("password")




let monitons=["Push up","Barfix","Burpee"];
localStorage.clear()
localStorage.setItem("montions",JSON.stringify(monitons));//arrary formantında yazdırdık
let dger=JSON.parse(localStorage.getItem("montions"));
dger.forEach(function(dger) {
    console.log(dger)
});










//break -Continue

//1 den 10 a sayıları yazdırıp 8 e geldiğinde döngüden çıkalım

//While ile yapımı
// let sayac=1;

// while(sayac<=10){
//     console.log(sayac)
//     if(sayac==8){
//         break
//     }
//     sayac++;
// }

//For kullanımı

// for(var i=0;i<=10;i++){
//     console.log(i)
//     if(i==8){
       
//         break;
//     }
    
// }

// let sayac=1;
// do{
//     console.log(sayac)
//     if(sayac==8){
//         break
//     }
//     sayac++;

// }while(sayac<=10);


//? Continue ->döngüyü yanlızca bir kere kırmak için yarıyor

for(var i=0;i<=10;i++){
   
    if(i==8){
        continue
    }
    console.log(i)
    
}
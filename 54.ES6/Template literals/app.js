//Template Literals
// function write(firstName,LastName) {
    // console.log("isim:"+ firstName +" "+"Soyisim:"+LastName )
    //template literals kullanmak
//     console.log(`İsim: ${firstName} Soyisim: ${LastName} `)    
//     console.log(
//         `İsim: ${firstName} 
//           Soyisim: ${LastName} `
//         )    //İsim: yusuf 
                   // Soyisim: kuzucu //böyle alt altada yazabiliriz
// }
// write("yusuf","kuzucu")

function userGetById(userId){
    fetch(`http://localhost:8080/Users/${userId}`)
}
userGetById(4);
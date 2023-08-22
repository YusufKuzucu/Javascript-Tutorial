//OPP GİRİŞ

class Insan{
    constructor(isim,soyisim,yas,maas){
        this.isim=isim;
        this.soyisim=soyisim;
        this.yas=yas;
        this.maas=maas;
    }
    bilgileriGoster(){
        console.log(`isim : ${this.isim} soyisim :${this.soyisim} yas : ${this.yas} maas : ${this.maas}  `)
    }
}



const ınsan=new Insan("yusuf","kuzucu","20",20000);
ınsan.bilgileriGoster();
console.log(ınsan.maas)
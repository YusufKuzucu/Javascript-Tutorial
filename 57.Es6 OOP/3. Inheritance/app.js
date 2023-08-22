//İnharitance (miras Alma) kavramı
//super:üst sınıfı gösterir
//super()
class Person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
    writeInfo(){
        console.log(this.firstName,this.lastName,this.salary)
    }
}
class Student extends Person{

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)//üst sınıfın constructorunı gösterdik

    }
    writeInfo(){
        super.writeInfo()
    }
}

class Engineer extends Person{
    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }
    writeInfo(){
        super.writeInfo()
    }
}


const per=new Person("yusf","kf","232")
per.writeInfo();
const student=new Student("yusuf","kuzucu","20000")
student.writeInfo(); 

const en=new Engineer("ahmet","al","2323323")
en.writeInfo();
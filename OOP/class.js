class Student{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getDob(){
        let date=new Date()
        return date.getFullYear()-this.age;
    }
    static youngest(...objects){
            let obj=objects.sort((a,b)=>a.age-b.age)
            console.log(obj);
            return obj[0];
    }
}
let student1=new Student("ashik",21);
let student2=new Student("bob",16);
let student3=new Student("john",21);
console.log(student1);
console.log(student2);
console.log(student3);
console.log(Student.youngest(student1,student2,student3));
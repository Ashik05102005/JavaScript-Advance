class exmp{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`welcom ${this.name}`);
    }

}
const student1=new exmp("ashik",20);
const student2=new exmp("john",20);


console.log(student1);
student1.greet();
student2.greet();
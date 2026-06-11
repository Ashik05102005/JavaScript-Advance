// optionalChaining.js
let user={
    name:"kjhgfds",
    cat:{
        name:"john",
        age:2
    },
    greets:function (){console.log(`welcome ${this.dog?.name??`"properties not avilable"`}`)}
}
console.log(user.cat?.name??"johny");
console.log(user.dog?.name??"jimmy");
console.log(user.greetss?.()?? "no function avilable");
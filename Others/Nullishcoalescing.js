// // Nullishcoalescing.js
// let user=null;
// console.log(user??"guest")
let obj={
    ashik:{
        age:20,
        place:undefined
    }
}
console.log(obj.ashik?.place??"not defined yet");
console.log(obj.ashik?.age??"not defined yet");

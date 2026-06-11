// divisibleByZero.js
function div(a,b){
    if(b===0){
        throw new Error( "Division by zero not allowed");
    }
    return a/b;
}
let division;
try{
    division=div(6,0);
    console.log(division);
}
catch(e){
    console.log(e.message);
}
let a;
try{
    a=5/0;
    if(a===Infinity){
        throw new Error("Infinite.....................");
    }
}
catch(e){
 console.log(e.message)     
 a=0;
}
finally{
    console.log(a);
}
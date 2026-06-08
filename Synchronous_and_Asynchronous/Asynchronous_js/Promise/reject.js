// Promise_resolve
let prm=new Promise((resolve,reject)=>{
    console.log("Promise execution startss");
    reject("Error..");
})
prm
.then(result=>console.log(result))
.catch((result)=>console.log(result));
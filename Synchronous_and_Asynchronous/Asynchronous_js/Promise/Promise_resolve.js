// Promise_resolve
let prm=new Promise((resolve)=>{
    console.log("promise Exicutes Succesfully");
    resolve("finished")
})
prm
.then((result)=>console.log(result))
let prm = new Promise((resolve,reject)=>{
    console.log("Promise Exicutes Successfully");
    // reject("failure");
        resolve("success");
        reject("failure");
});
console.log(prm);
prm
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
});
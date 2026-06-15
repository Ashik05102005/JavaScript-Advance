// resolveOrReject.js
const prm=new Promise((resolve, reject) => {
    let num=16;
    if(num>10){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
}).then((result)=>{
    console.log(result)
})
.catch((result)=>{
    console.log(result)
})


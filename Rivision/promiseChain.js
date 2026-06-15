// promiseChain.js
const step1=()=>{
    return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("step1")
        },2000)
    })
}
const step2=()=>{
    return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("step2")
        },2000)
    })
}
const step3=()=>{
    return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("step3")
        },2000)
    })
}
step1()
.then((result)=>{
    console.log(result);
    return step2()
})
.then((result)=>{
    console.log(result);
    return step3()
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>console.log(error));
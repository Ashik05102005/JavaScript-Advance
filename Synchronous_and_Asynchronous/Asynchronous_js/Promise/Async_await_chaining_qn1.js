// Async_await_chaining_qn1.js
let FetchUserData=()=>{
    return new Promise((resolve, reject) => {
        console.log("start fetching")
        setTimeout(()=>{
            resolve("User data fetched");
        },1000)
    })
}
let ProcessTheData=()=>{
    return new Promise((resolve, reject) => {
        console.log("start processing")
        setTimeout(()=>{
            reject("Data processed");
        },1000)
    })
}
let SaveTheData=()=>{
    console.log("start saving")
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data saved");
        },1000)
    })
}
async function run(params) {
   try  {
    let fetchInfo=await FetchUserData();
    console.log(fetchInfo)
    let ProcessInfo=await ProcessTheData();
    console.log(ProcessInfo)
    let SaveInfo=await SaveTheData();
    console.log(SaveInfo)
}
catch{
    console.log("promise failed")
}
finally{
    console.log("Execution finishedd....")
}
}
run();
// FetchUserData()
// .then((result)=>{
//     console.log(result);
//     return ProcessTheData();
// })
// .then((result)=>{
//     console.log(result);
//     return SaveTheData()
    
// })
// .then((result)=>{
//     console.log(result);
//     console.log("execution completed");
// })
// .catch(()=>console.log("Error occurs...."))
// .finally(()=>console.log("Done"));

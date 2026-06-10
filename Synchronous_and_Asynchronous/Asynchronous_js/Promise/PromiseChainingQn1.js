let FetchUserData=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("User data fetched");
        },1000)
    })
}
let ProcessTheData=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data processed");
        },1000)
    })
}
let SaveTheData=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data saved");
        },1000)
    })
}
FetchUserData()
.then((result)=>{
    console.log(result);
    return ProcessTheData();
})
.then((result)=>{
    console.log(result);
    return SaveTheData()
    
})
.then((result)=>{
    console.log(result);
    console.log("execution completed");
})
.catch(()=>console.log("Error occurs...."))
.finally(()=>console.log("Done"));

let step1=()=>{
    return new Promise((resolve, reject) => {
        console.log("Step 1 execution starts...");
        setTimeout(()=>{
            console.log("step 1 completed");
            resolve()
        },5000)
    })
}
let step2=()=>{
    return new Promise((resolve, reject) => {
        console.log("Step 2 execution starts...");
        setTimeout(()=>{
            console.log("step 2 completed");
            resolve()
        },4000)
    })
}
let step3=()=>{
    return new Promise((resolve, reject) => {
        console.log("Step 3 execution starts...");
        setTimeout(()=>{
            console.log("step 3 completed...");
            resolve()
        },6000)
    })
}
let step4=()=>{
    return new Promise((resolve, reject) => {
        console.log("Step 4 execution starts...");
        setTimeout(()=>{
            console.log("step 4 completed");
            resolve()
        },3000)
    })
}
// step1()
// .then(step2)
// .then(step3)
// .then(step4)
// .then(()=>console.log("Whole steps completed"))
// .catch(()=>console.log("Promise Failed"));
async function run(){
    try
    {
    await step1();
    await step2();
    await step3();
    await step4();
    console.log("all steps finished");
    }
    catch(error){
        console.log("promise failed");
    }

}
run();
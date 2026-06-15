// ayncAwait.js
async function asaw() {
    try{
    const fetchData=await fetch("https://catfact.ninja/facts");
    const data=await fetchData.json();
    const list=data.data;
    
    list.forEach(element => {
        console.log(element.fact);
    });
    console.log("execution completed");
    }
    catch(error){
        console.log(error.message)
    }
}
asaw();
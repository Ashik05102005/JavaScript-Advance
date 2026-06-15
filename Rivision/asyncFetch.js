async function fetchin() {
    
    try{
    const fetchData=await fetch("https://catfact.ninja/fact");
    const Data =await fetchData.json();
    console.log(Data.fact)
}
catch(error){
    console.log(error.message);
    
}
}
fetchin();
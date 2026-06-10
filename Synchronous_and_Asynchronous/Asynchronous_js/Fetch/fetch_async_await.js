async function getFactObj() {
   try{
    const catFact=await fetch("https://catfact.ninja/fact");
    // console.log(catFact);
    const data= await catFact.json()
    console.log(data.fact)
    return data.fact;
}
catch{
    console.log("error occurs")
}
}
getFactObj();

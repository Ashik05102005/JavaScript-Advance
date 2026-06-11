const data=fetch("https://catfact.ninja/fact")
    data.then((res)=> res.text())
    .then((txt)=> JSON.parse(txt))
    .then((data)=>console.log(data.fact))
    .catch(()=>console.log("error occurs"));

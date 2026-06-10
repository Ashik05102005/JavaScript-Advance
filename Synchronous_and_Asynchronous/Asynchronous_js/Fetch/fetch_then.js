// const data=fetch("https://catfact.ninja/fact")
//     data.then((res)=> res.text())
//     .then((txt)=> JSON.parse(txt))
//     .then((data)=>console.log(data.fact))
//     .catch(()=>console.log("error occurs"));
Promise.resolve(10)
  .then(num => num * 2)       // 20
  .then(num => num + 5)       // 25
  .then(num => console.log(num)) // 25
  .catch(err => console.error(err));

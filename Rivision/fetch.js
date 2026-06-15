// fetch.js
fetch("https://catfact.ninja/docs?api-docs.json")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error.message));
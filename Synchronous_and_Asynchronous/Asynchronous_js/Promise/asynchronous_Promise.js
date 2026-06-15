const fetchData = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
        console.log("starts fetching..")
        setTimeout(()=>{
            resolve("✅ Data fetched");
        
      },3000)
    } else {
      reject("❌ Fetch failed");
    }
  });
};

fetchData(true)
  .then(data => console.log(data))
  .then()   // runs if resolved
  .catch(err => console.log(err));   // runs if rejected

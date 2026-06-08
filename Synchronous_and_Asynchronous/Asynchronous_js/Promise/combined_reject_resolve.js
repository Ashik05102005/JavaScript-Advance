const fetchData = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("✅ Data fetched");
    } else {
      reject("❌ Fetch failed");
    }
  });
};

fetchData(false)
  .then(data => console.log(data))   // runs if resolved
  .catch(err => console.log(err));   // runs if rejected

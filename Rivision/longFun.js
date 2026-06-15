const longTask=()=>{

  for(let i = 0; i < 10000; i++) {
    console.log(i); 
  }
}

console.log("Start");

longTask();

console.log("End");

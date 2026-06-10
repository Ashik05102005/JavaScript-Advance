const p1=Promise.reject("hello");
const p2=new Promise((resolve, reject) => {
    resolve("perfect")
})
const p3=new Promise((resolve, reject) => {
    resolve("success")
})
const prm=Promise.allSettled([p1,p2,p3]);
prm
.then((response)=>console.log(response))
.catch(()=>console.log("error"));
//promise.race
Promise.race([
  new Promise(res => setTimeout(() => res("fast"), 1000)),
  new Promise(res => setTimeout(() => res("slow"), 100))
]).then(result => console.log(result)); // "fast"
//promise.any
Promise.any([Promise.reject("fail"), Promise.resolve("success")])
  .then(result => console.log(result)); // "success"

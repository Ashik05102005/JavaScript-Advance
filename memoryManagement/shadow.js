// // shadow.js
// let c = 100;
// function x() {
//   var c = 10;
//   console.log(c); // 10
// }
// x();
// console.log(c); // 100
let a = 10;
{
  let a = 20; // SyntaxError
  console.log(a);
  
}
console.log(a);

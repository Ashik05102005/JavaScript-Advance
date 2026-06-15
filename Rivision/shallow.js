let arr = [1, 2, [3, 4]];
let copy = [...arr]; // shallow copy

copy[0] = 99;        // affects only copy
arr[2][0] = 1100;    // affects BOTH original and copy
arr[2][1] = 300;    // affects BOTH original and copy

console.log(arr);  // [1, 2, [100, 4]]
console.log(copy); // [99, 2, [100, 4]]

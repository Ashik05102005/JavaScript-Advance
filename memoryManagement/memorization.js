const cache={}
function add(a,b){
    uniqueKey=a+","+b;
    if(cache[uniqueKey]){
        console.log("it is already exicuted");
        return cache[uniqueKey];    
    }
    else{
        console.log("it is executing first time;")
        cache[uniqueKey]=a+b;
        return cache[uniqueKey];
    }
}
console.log(add(2,5));
console.log(add(2,5));
console.log(add(6,4));
console.log(add(2,5));
console.log(add(2,7));
console.log(cache);

// add(2,5);
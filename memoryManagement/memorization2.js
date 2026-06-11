function add(...args){
    return args.reduce((result,element)=>result+element,0); 
}
function mul(...args){
    return args.reduce((result,element)=>result*element,1); 
}
function getLengthArray(...args){
    return args;
}
function main(func){
    const cache={};
     
    return function(...args){
        const secretKey= JSON.stringify(args);
        if(cache[secretKey]){
            console.log("already call this function");
            return cache[secretKey]
        }
        else{
            console.log("the function is called for first time");
            cache[secretKey]=func(...args);
            return cache[secretKey];
        }
        console.log(cache);
    }
}
// const f1=main(add);
// console.log(f1(1,2));
// console.log(f1(1,2));
// console.log(f1(1,5));
const f2=main(getLengthArray);
console.log(f2("Apple","banana","grapes"));

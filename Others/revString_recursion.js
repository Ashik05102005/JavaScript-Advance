function main(str){
    let strinArray=[...str],rev=[]
    function reverse(index){
        if(index>=0){
            rev.push(strinArray[index]);
            index--;
            reverse(index);
        }
    }
    reverse(str.length-1)
    return rev.join("")
}
console.log(main("hello"));
function main(word){
    let letters=[...word],rev=[];
    function reverse(index){
        rev.push(letters[index])
        if(index!==0){
            index--;
            reverse(index)
        }
    }
    reverse(letters.length-1)
    return rev.join("");
}
console.log(main("hello world..."));
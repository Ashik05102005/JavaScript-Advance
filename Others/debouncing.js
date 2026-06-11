let counter=1
function getData(){
    console.log("fetching... "+counter++);
}
function debouncing(dataFunc,delay){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            dataFunc.apply(context,args);
        },delay)

    }
}
let call=debouncing(getData,300)
function fun1(){
    let start=Date.now();
    let delay=6000;//6000ms=>6s
    end=start+delay;
    console.log("Function 1 starts")
    while(Date.now()<=end){
     
    }
    console.log("Function 1 ends") 
}
function fun2(){
    let start=Date.now();
    let delay=5000;//5000ms=>5s
    end=start+delay;
    console.log("Function 2 starts")
    while(Date.now()<=end){
     
    }
    console.log("Function 2 ends") 
}
function fun3(){
    let start=Date.now();
    let delay=4000;//4000ms=>4s
    end=start+delay;
    console.log("Function 3 starts")
    while(Date.now()<=end){
     
    }
    console.log("Function 3 ends") 
}
fun1();
//fun2 wait for finish execution of fun 1
fun2();
//fun3 wait for finish execution of fun 3
fun3();
//execution completes
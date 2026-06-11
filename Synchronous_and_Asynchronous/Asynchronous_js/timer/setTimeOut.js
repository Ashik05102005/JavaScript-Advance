function fun1(){
    console.log("Function 1 starts")
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
function fun4(){
    console.log("Function 4 starts");
    console.log("Function 4 ends");
}
//move fun1 to callstack and exicutes immediatly
fun1();
//move fun2 to register and after 5000ms(5s) move it to callback queue then according to 
//queue exicute by FIFO [in this program fun2 exicutes seccond because it wait for 5s]
setTimeout(fun2,5000);
//move fun3 to register and after 2000ms(2s) move it to callback queue then according to 
//queue exicute by FIFO [in this program fun3 exicutes first because it only wait for 2s]
setTimeout(fun3,2000);
//move fun1 to callstack and exicutes immediatly
fun4();
//execution completes
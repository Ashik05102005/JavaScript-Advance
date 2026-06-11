
function printTime(){
    let time=new Date();
    let current_time= `time : ${time.getHours()} - ${time.getMinutes()} - ${time.getSeconds()}`
    console.log(current_time);
}
let a=setInterval(printTime,1000);
setTimeout(()=>clearInterval(a),60000);
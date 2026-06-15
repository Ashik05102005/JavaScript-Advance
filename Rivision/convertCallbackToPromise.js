// convertCallbackToPromise.js
// function getUser(callback) {
//     setTimeout(() => {
//         callback("Ashik");
//     }, 1000);
// }
function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ashik");
    }, 1000);
    })
}
const call=getUser();
call
.then(result=>console.log(result))
.catch(error=>console.log(error));

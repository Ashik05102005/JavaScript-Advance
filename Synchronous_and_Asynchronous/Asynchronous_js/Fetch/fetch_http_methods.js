// fetch_http_methods.js
async function postRestApi(){
    try{
        //---post data to the API---
        console.log("executioon begins");
        let postObj={
                "name": "Apple MacBook Pro 16",
                "data": {
                        "year": 2019,
                        "price": 1849.99,
                        "CPU model": "Intel Core i9",
                        "Hard disk size": "1 TB"
                        }
                    }
        const postReponse=await fetch("https://api.restful-api.dev/objects",
            {
                method:'POST',
                headers:{
                   'Content-Type':'application/json',
                   'Accept':'application/json'
                },
                body:JSON.stringify(postObj)
            } 
        );
        let postText=await postReponse.json();
        console.log(postText.id)
        //get the the specific object what we pushed
        let url="https://api.restful-api.dev/objects/"+postText.id;
        const getResponse=await fetch(url)
        const gettText=await getResponse.json()
        console.log(gettText)

        //--- PUT/UPDATE---
        let putObj={
                "name": "Apple MacBook Pro 26",
                "data": {
                        "year": 2026,
                        "price": 40000,
                        "CPU model": "Intel Core i19",
                        "Hard disk size": "2 TB"
                        }
                    }
        const putResponse=await fetch(url,
            {
                method:'PUT',
                headers:{
                   'Content-Type':'application/json',
                   'Accept':'application/json'
                },
                body:JSON.stringify(putObj)
            } 
        );
    
        let putText=await putResponse.json();
        console.log("afeter update")
        console.log(putText)
        //---delete Element---//
        console.log("delete")
        const deleteResponse=await fetch(url,{method:'DELETE'});
        console.log(deleteResponse);
    }
    
    catch(error){
        console.log(error.message);
    }
}
postRestApi();
// getRestApi();

// async function getRestApi(){
//     console.log("starts Execution")
//     try{
//     const data=await fetch("https://api.restful-api.dev/objects/");
//     const text=await data.json();
//     console.log(text);
//     }
//     catch(error){
//         console.log("error : "+error);
//     }
// }

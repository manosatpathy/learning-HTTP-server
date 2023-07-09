function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logResponseBody)
}

let sendObj = {
    method : "GET"
}

fetch("http://localhost:3000/handleSum?counter=100", sendObj).then(callbackFn) 
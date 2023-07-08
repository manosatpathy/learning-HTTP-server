const express = require("express");
const app = express();
const port = 3000;


function midddleware1(req,res,next){
  console.log("from inside middleware " + req.headers.counter);
  next();
}
app.use(midddleware1);

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    sum += i;
  }
  return sum;
}

function showSum(req, res) {
  let counter = req.headers.counter;
  let calculatedSum = calculateSum(counter);
  let answer = "answer is " + calculatedSum;
  res.send(answer);
}

function createUser(req, res) {
  res.send("user created");
}

function updateUser(req, res) {
    res.send("user data updated");
  }

  function deleteUser(req, res) {
    res.send("use deleted");
  }

 app.get("/handleSum", showSum); //Get request.
app.post("/createUser", createUser); //Post request.
app.put("/updateUser", updateUser); //Post request.
app.delete("/deleteUser", deleteUser); //Post request.

app.post;
app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});

//

// console.log(calculatedSum);

// const fs = require("fs")

// function callback(err, data){
//     console.log(data)
// }

// fs.readFile("a.txt","utf-8",callback)

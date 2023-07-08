const express = require("express");
let bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

function midddleware1(req, res, next) {
  console.log("from inside middleware " + req.body.counter);
  next();
}
app.use(midddleware1);

//function sum & mul start.

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}
function calculateMul(counter) {
  let mul = 1;
  for (let i = 1; i <= counter; i++) {
    mul *= i;
  }
  return mul;
}

//function sum & mul end.

function showSum(req, res) {
  let counter = req.body.counter;

  let calculatedSum = calculateSum(counter);
  let calculatedMul = calculateMul(counter);
  let answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };
  res.send(answerObject);
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

function givePage(req, res) {
  res.send(`<head>
    <title>
        Hello from page
    </title>
</head>
<body>
    <b>Hi there</b>
</body> `);
}

app.get("/", givePage);

app.get("/handleSum", showSum); //Get request.
app.post("/createUser", createUser); //Post request.
app.put("/updateUser", updateUser); //Post request.
app.delete("/deleteUser", deleteUser); //Post request.

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});

//

// console.log(calculatedSum);

// const fs = require("fs")

// function callback(err, data){
//     console.log(data)
// }

// fs.readFile("a.txt","utf-8",callback)

const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// the middleware below is our own middleware, mostly we will use external middlewares

// function middleware1(req,res,next) {
//     console.log("from inside the middleware " + req.headers.counter);
//     next(); // next sends the control to handleFirst function, if we dont call next the request will never reach the function and will be stuck in loop.
// }
// app.use(middleware1);

// we need body parser beacuse we cant just extract data from body, we need to use body parser for that.

app.use(bodyParser.json())

function calculateSum(n) {
    var sum = 0;
    for (let i = 0; i <= n; i++) {
        sum+=i;    
    }
    return sum;
}
// function calculateMul(n) {
//     var answer = 1;
//     for (let i = 1; i <= n; i++) {
//         answer*=i;    
//     }
//     return answer;
// }

// function givePage(req,res) {

//     res.sendFile(__dirname + "/index.html")
//     // res.send(`<head>
//     // <title>
//     //     Hello from page
//     // </title>
//     // </head>
//     // <body>
//     //     <i>Hi there</i>
//     // </body>`)
// }

// app.get('/', givePage)

function handleFirst(req,res){
    var counter = req.query.counter;
    // var counter = req.headers.counter;
    // if (counter<10000) {
        // var counter = req.body.counter;
        var calculatedSum = calculateSum(counter);
        // var calculatedMul = calculateMul(counter);
        var answerObject = {
            sum : calculatedSum,
            // mul : calculatedMul
        }
        res.send(answerObject);
        // var answer = "the sum is "+ calculatedSum;
        // res.send(answer);
    // }
    // else{
    //     res.status(411).send("You have sent a very big number")
    // }
}

app.get('/handleSum', handleFirst)
// app.post('/handleSum', handleFirst)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)


// var n = 100;
// console.log(calculateSum(n));
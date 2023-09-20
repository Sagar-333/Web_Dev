function starline(numberRows) {
    var answer = "";
    for (let i = 0; i < numberRows; i++) {
       answer = answer +"**";
    }
    console.log(answer);
}

function starryPattern(numberRows) {
   for (let i = 0; i <= numberRows; i++) {
        starline(i);
   }
}   

var answer = starryPattern(10);
console.log(answer);
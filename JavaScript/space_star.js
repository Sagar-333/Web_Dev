function starryPattern(n) {
    for (let i = 0; i <= n; i++) {
        var answer="";
        for (let k = 0; k < n-i; k++) {
            answer += " "         
        }
        for (let j = 0; j < (2*i)-1; j++) {
            answer = answer+"*"
        }
        console.log(answer)
    }
}

var answer = starryPattern(3)
console.log(answer)
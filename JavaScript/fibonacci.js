function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var fib = [];
        fib[0]=0;
        fib[1]=1;
        for (var i = 2; i < n; i++) {
            fib[i]=fib[i-1]+fib[i-2];
        }
        return fib;
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
console.log(fibonacciGenerator(3)); 
function fullLine(n) {
    var str =""
    for (let i = 0; i < n; i++) {
        str = str +"*"  
    }
    console.log(str)
}
function halfLine(n) {
    var str=""
    str = str+'*'
    for (let i = 0; i < n-2; i++) {
        var str = str +" "
    }
    str = str+'*'
    console.log(str)
}
function printWhole(n) {
    fullLine(n)
    for (let i = 0; i < n-2; i++) {
        halfLine(n) 
    }
    fullLine(n)
}
printWhole(5)
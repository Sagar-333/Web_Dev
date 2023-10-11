function isPalindrome(a) {
    for (let i = 0; i < (a.length)/2; i++) {
        var start = i;
        var end = (a.length)-1-i;
        if (a[start]!=a[end]) {
            return false;
        }
    }
    return true;
}
var str1 = "abccba";
console.log(isPalindrome(str1));
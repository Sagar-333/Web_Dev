/*  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.*/
function isAnagram(a, b) {
    let n1= a.length;
    let n2= b.length;

    if (n1!=n2) {
        return false;
    }
    let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
        return false
    }
   }
   return true;
}
let str1="ionl";
let str2="lion";
console.log(isAnagram(str1,str2));

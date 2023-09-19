var name = "Sagar";
var age = 20;
var employed = true;    
console.log(name);
function User(name, age , employed) {
    return(
        'Name is ' +
        name +
        ', age is ' +
        age +
        ', employement is ' +
        employed
    );
}
console.log(User(name,age,employed));
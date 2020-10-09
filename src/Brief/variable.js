let myVariable = 'global';
myOtherVariable = 'global';

function myFunction () {
    let myVariable = 'local'
    return myVariable
}
function myOtherFunction () {
    myOtherVariable = 'local'
    return myOtherVariable
}

console.log(myVariable)
console.log(myFunction())

console.log(myOtherVariable)
console.log(myOtherFunction())//引用全局变量并将他赋值为local
console.log(myOtherVariable)
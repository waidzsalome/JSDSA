const sum = (x, y, z) => {
    return x+y+z
}

let params = [3,4,5];
console.log(sum(...params))
console.log(sum.apply(undefined, params))

function restParamaterFunction (x, y, ...a) {
    return (x + y)*a.length
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7))

function restParamaterFunction2(x, y) {
    let a = Array.prototype.slice.call(arguments, 2)
    return (x + y) * a.length
}
console.log(restParamaterFunction2(1, 2, 'hello', true, 7))
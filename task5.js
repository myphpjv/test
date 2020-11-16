
// Write a functions that will implement math calculations
function plus(y) {
    return function (x){
        return x + y;
    }
}

function minus(y) {
    return function (x){
        return x - y;
    }
}

function dividedBy(y) {
    return function (x){
        return x/y;
    }
}

function times(y) {
    return function (x){
        return x * y;
    }
}

function getNumber(func, num) {
    return typeof func === 'function' ? func(num) : num;
}

function two(f) {
    return getNumber(f, 2);
}

function five(f) {
    return getNumber(f, 5);
}

function seven(f) {
    return getNumber(f, 7);
}

function four(f) {
    return getNumber(f, 4);
}

function eight(f) {
    return getNumber(f, 8);
}

console.log(five(minus(four()))); // 1
console.log(two(times(two(plus(seven()))))); // 18
console.log(eight(dividedBy(four()))); // 2

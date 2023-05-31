function sum() {
    console.log(arguments)   // it is an object but we can use for of loop in here
    for (let key of arguments) {
        console.log(key);
    }
    // return a + b;
    return Object.values(arguments).reduce((res, currentValue) => {
        return res + currentValue;
    }, 0)
}

console.log(sum(1, 2));
console.log(sum(1)); // b is undefined by defalut and the result will be Nan
console.log(sum(1, 2, 3, 4, 5));
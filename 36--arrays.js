const numbers = [1, 2, 3, 4, -3];

// way 1
sum = 0;
for (let number of numbers) {
    sum += number;
}

console.log(sum);

// way 2

const newSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  // 0 is initial value for accumulator, if we do not specify 0 as initial value, the initial value will be the first value of an array and currentValue will be the second value of and array and it is correct too.

console.log(newSum);



console.log(numbers.reduce((a, b) => {
    console.log(a, b);
    return a = b;
}))
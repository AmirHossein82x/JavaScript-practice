const numbers = [1, 2, 3, 4, -7, -4];

const posetiveNumbers = numbers.filter(value => {
    return value >= 0;
});

console.log(posetiveNumbers)
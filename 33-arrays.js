const numbers = [1, -3, 3, 4];

const allPosetive = numbers.every((value) => {
    return value >= 0;
});

console.log(allPosetive);

const anyPosetive = numbers.some((value) => {
    return value >= 0;
});

console.log(anyPosetive)
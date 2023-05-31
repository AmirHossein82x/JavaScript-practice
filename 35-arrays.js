const numbers = [1, 2, 3, 4, -1, -2];

const newNumbers = numbers.map(value => {
    if (value % 2 === 0) {
        return value ** 2;
    }
    else if (value <= 0) {
        return value / 2;
    };
});

console.log(newNumbers);


const allow = [1, 2, 3, 4];

const newAllow = allow.map(value => {
    return {value: value}
});

console.log(newAllow);


const book = [1, 2, 3, 4];
const newBook = book
                .filter(value => value > 2)
                .map(value => ({value: value}));
                
console.log(newBook);
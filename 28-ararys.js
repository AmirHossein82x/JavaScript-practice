const numbers = [1, 2 ,3, 4];

// delete from end
let last = numbers.pop()
console.log(numbers)
console.log(last)


// delete from beginging
let first = numbers.shift()
console.log(numbers)
console.log(first)


const newNumbers = [1, 2, 3, 4];

let number = newNumbers.splice(2, 1);  // 2 is index of 3 and 1 is number of element we wanna delete
console.log(newNumbers);
console.log(number)

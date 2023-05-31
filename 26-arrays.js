const numbers = [1, 2, 3, 1, 4]

console.log(numbers.indexOf('ali'))  // if item is not in list it will return -1
console.log(numbers.indexOf(1))   //optianaly we can put another number as it called starting index
console.log(numbers.indexOf(1, 2)) // it start searching from index 2
console.log(numbers.lastIndexOf(1)) 
console.log(numbers.indexOf(0))

// if (0 in numbers) console.log('yes')   // this solution is wrong
// else console.log('no')    

if (numbers.indexOf(0) !== -1) console.log('yes')
console.log(numbers.includes(0))
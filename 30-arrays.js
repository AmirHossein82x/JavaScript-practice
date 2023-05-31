const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second)
const combined2 = [...first, ...second]
console.log(combined)
console.log(combined2)
console.log(combined.slice(2, 4))  // in python it is like this print(combined[2:4])
console.log(combined.slice(2)) //  in python it is like this print(combined[2:])
console.log(combined.slice()) // copy the list

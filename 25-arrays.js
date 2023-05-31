const numbers = [3, 4];
numbers.push(5, 6) // add elemets to the end of an array
console.log(numbers);


numbers.unshift(1, 2);  // add elements to the beginging of an array
console.log(numbers)


numbers.splice(2, 0, 'ali');   // 2 is index we wanna add , 0 is number of element we wanana delete and 'ali' is our value
console.log(numbers)


numbers.splice(2, 1, 'hossein'); 
console.log(numbers)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log('--------------------')

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log('-------------')

console.log(!true)
console.log(!(true || false))

console.log('-------------')

console.log(false || 'amirhossein')
console.log(0 || false)
console.log(false || '')

console.log(false || 1 || 2); // || 2 is ignored

let userColor = 'red';
let defaultColor = 'blue';
let selectedColor = defaultColor || userColor 

console.log(selectedColor) // out put is blue 
// if we set like this > let selectedColor = userColor || defaultColor   the out put will be red 


let userColor1;
let defaultColor1 = 'blue';
let selectedColor1 = defaultColor1 ||userColor1

console.log(selectedColor1)
// if we set like this > let selectedColor1 = userColor1 || defaultColor1   the output will not change


let a;
let b;
console.log(a && b)



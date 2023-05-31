const message = 'hi';

console.log(message.indexOf('h'))
console.log(message.includes('h'))
console.log(message.length)
console.log(message[0])
console.log(message.startsWith('h'))
console.log(message.endsWith('h'))

const newMessage = message.repeat(4)
console.log(newMessage)

const newMessage2 = message.replace('i', 'hello')
console.log(newMessage2)

console.log(message.toUpperCase())
console.log(message.trim()) /// it is like strip() in python
console.log(message.trimLeft()) 

// search for escape notation
const hello = 'hello \'school\'';
console.log(hello)


let varable1 = 'hello to everyone';
let listVarable = varable1.split(' ')
console.log(listVarable)
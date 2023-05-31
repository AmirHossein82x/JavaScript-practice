let x = 10;
let y = x;

x = 20;

console.log('x: ', x);
console.log('y: ', y);


let object1 = {value: 10};
let object2 = object1;

object1.value = 20;

console.log('object1: ', object1);
console.log('object2: ', object2);


let number = 10;

function incerase(number) {
    number++;
}

incerase(number)
console.log('number: ', number)


let object3 = {value : 10};

function incerase2(obj) {
    obj.value++;
}

incerase2(object3)
console.log('object3: ', object3)
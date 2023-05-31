function sum(...args) {
    console.log(args);
    return args.reduce((a, b) => a + b)
}

let a = sum(1, 2, 3, 4);
console.log(a);



// function sumNew(a, ...args, n) {   wrong we can not use variable (n) after rest operator (...args)
//     console.log(args);
//     return args.reduce((a, b) => a + b)
// }

// let b = sum(1, 2, 3, 4);
// console.log(a);



// way 1
function sample(a, b, c) {
    a = a || 3.5  // if a has value it will be it's value otherwise it will assign to 3.5
    console.log('hello');

}

// way 2
function sample2(a, b=3.5, c) {
    console.log(a, b, c);
}

sample2(30, undefined, 78); // in this way b will be the default value = 3.5
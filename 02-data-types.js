let name = 'amirhossein';  //string
let age = 20;  // number literal
let score = 18.5; // type of score is still number    in js we do not have float instead , all numbers are type of number
let is_student = true;  // boolean
let first_name = undefined; // if we do not set it to undefined the value will be undefined too
let last_name = null;  // we use null when we wanna clear the value of a variable, the type is object

console.log(typeof(age)) // type of the variable

let person = {
    'name': 'ahmad',
    'age' : 67
};

// we can change the name
// way 1
person.name = 'Hossein'

// way 2
person['name'] = 'Reza'

// example
let a = 'name';
person[a] = 'ghanda'


console.log(person);      // type of person is object
console.log(person.name)


let selected_colors = ['red', 'blue'];   // type of selected_colors is object
selected_colors[2] = 'green'
selected_colors[4] = 'orange'
console.log(selected_colors, selected_colors.length)
console.log(typeof(person), typeof(selected_colors))



// functions
function greet(name, ground) {
    console.log('hello ', name + ' welcome to ' + ground);
}   // in function we do not use semicaloumn in here ;

greet('amirhossein', 'school');


function square(number) {
    return number ** 2
}

new_number = square(3)
console.log(new_number)
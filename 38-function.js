// defining function


walk();  `it is correct`
// first way
function walk() {
    console.log('hello');
}



// second way
// run()  --> it is not correct
let run = function() {
    console.log('hello');
};

let move = run;

walk();
run();
move();

`note that in the first way you can call the function before you declare the function but in the second way you can not.`
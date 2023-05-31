for (let i=0; i<5; i++) {
    console.log('hello');
}
// console.log(i)   error i is not defined


for (var i=0; i<5; i++) {
    console.log('hello');
}
console.log(i)  //i = 5


function start () {
    for (var i=0; i < 5; i++) {
        if (true) {
            let color = 'red';
        }
        // console.log(color)  -> error 
    }
}

start()

function start2 () {
    for (var i=0; i < 5; i++) {
        if (true) {
            var color = 'red';   // I just can use color varable inside of the function
        }
        console.log(color)   
    }
}

start2()

// console.log(color)  error

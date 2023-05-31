for (let i = 0; i < 5; i++) {
    console.log('hello world', i)
} 

// for (let i = 1; i <= 5; i++) {
//     console.log('hello world', i)
// } 

for (let i=0; i < 5; i++) {
    if (i % 2 !== 0)
        console.log('odd', i)
}


for (let i=5; i >= 1; i--) {
    if (i % 2 !== 0)
        console.log('odd', i)
}


// for-in

const person = {
    'name': 'amirhossen',
    'age': 20
};

for (let key in person)
    console.log(key, person[key]);


const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index])




// for-of

for (let color of colors)
    console.log(color)
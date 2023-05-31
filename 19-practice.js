const object1 = {
    color : 'red',
    team : 'perspolis',
    win() {
        console.log('win this season');
    },
};


console.log('object1: ', object1);

for (let key in object1) {
    console.log(key)
}

console.log("Object.keys(object1): ", Object.keys(object1))

for (let key of Object.keys(object1)) {
    console.log(key)
};


console.log("Object.entries(object1): ", Object.entries(object1))

for (let key of Object.entries(object1)) {
    console.log(key)
};

for (let index in Object.entries(object1)) {
    console.log(index)
};


for (let index in Object.keys(object1)) {
    console.log(index)
};

console.log("Object.values(object1): ", Object.values(object1))


// cloning

const object2 = Object.assign({}, object1);
const object3 = {...object1}
const object4 = {
    isActive : true,
}

console.log(object2)
console.log(object3)


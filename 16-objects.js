const circle = {
    radius: 1,
    location : {
        x: 1,
        y: 1
    },
    isVisible : true,
    draw : function() {
        console.log('hello circle');
    }
};

circle.draw()

// Factory function
function createCircle(radius) {
    return {
        radius: radius, // if key and value are the same we can write like this : radius,
        draw() {
            console.log('hello world')
        }
        };
    }


const circle1 = createCircle(4);
circle1.pattern = function() {
    console.log('hello world')
};
circle1.color = 'red';
delete circle1.color
console.log(circle1)
const circle2 = createCircle(5);
console.log(circle2)


// Constructor Fucntion

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('hello world');
    };
}


const cic = new Circle(6);
Circle.call({}, 1)
Circle.apply({}, [1, 2, 3])

console.log(cic.constructor)
console.log(circle1.constructor)
console.log(typeof Number('8'))


console.log(Circle.name)  // Circle
console.log(Circle.length)



// for in   for of


const school = {
    name : 'jahad', 
    members : 100,
    sayMyName() {
        console.log('jahad');
    },
};


for (let key in school) {
    console.log(key, ' ', school[key]);
}

// for (let key of school) {
//     console.log(key, ' ', school[key]);   school is not iterable error
// }

for (let key of Object.values(school)) {
    console.log(key);
}


console.log('--------------------------------------');

for (let entry of Object.entries(school)) {
    console.log(entry);
}


if ('radius' in circle) console.log('Yes')
else console.log('no')
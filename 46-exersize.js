console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(1));


function sum(...args) {
    if (args.length === 1 && Array.isArray(args[0])) {
        args = [...args[0]];
    }
    
    return args.reduce((res, current) => res + current);
}

console.log(sum([1,2, 3] ));


const circle = {
    radius: 1,
    
    get area() {
        return Math.PI *this.radius * this.radius;
    }
};

console.log(circle.area)
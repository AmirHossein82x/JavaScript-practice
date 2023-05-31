function arrayFromRange(min, max) {
    const array = []
    for (let i = min; i < max + 1; i++) {
            array.push(i);
    }
    return array
}

myArray = arrayFromRange(1, 5);
console.log(myArray);


function search(array, value) {
    for (let key of array) {
        if (key === value) {
            return true;
        }
    }
    return false;
}

result = search([1, 2, 3, 4], 2);
console.log(result);



function execpt(array, excluded) {
    const outPut = [];
    for (let key of array) {
        if (!excluded.includes(key)) {
         outPut.push(key);
        }  
    }
    return outPut;
}

let e = execpt([1,2 ,3 ,4 ,5 ,6], [1, 2, 2,3 , 3]);
console.log(e);



function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('invalid offset');
        return;
    }
    let outPut = [...array];
    let element = outPut.splice(index, 1)[0];
    outPut.splice(index + offset, 0, element);
    return outPut;

}


// newArray = move([1, 2, 3, 4, 5], 0, 20);
// console.log(newArray);



function countAccurence(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
         const occurrence = (currentValue === searchElement)
         return accumulator + occurrence;
    }, 0)
}

console.log(countAccurence([1, 2,2 , 3, 4], 2));


const movies = [
    {tilte: 'a', year: 2018, rating: 4.5},
    {tilte: 'b', year: 2018, rating: 4.7},
    {tilte: 'c', year: 2018, rating: 3},
    {tilte: 'd', year: 2017, rating: 4.5}
];



let a = movies.filter((obj) => {
    return obj.year === 2018 && obj.rating >= 4;
}).sort((a, b) => a.rating - b.rating).reverse().map(obj => obj.tilte)

console.log(a)



function countAA(array, element) {
    return array.reduce((res, currentValue) => {
        a = (currentValue === element);
        return res + a;
    }, 0);
};

console.log(countAA([1,2, 3, 4, 2, 2, 2], 4))
const numbers = [1, 2, 3, 4];
const joined = numbers.join('+');
console.log(joined)


let message = 'this is my first message';
let messsageList = message.split(' ')
console.log(messsageList)
console.log(messsageList.join('-'))


const myArray =[6, 1, 8, 2];
myArray.sort();
myArray.reverse();
console.log(myArray)


const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Django'},

]


courses.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    else return 0
})

console.log(courses)
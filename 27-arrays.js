const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];
console.log(courses.includes('a'))  // it returns false

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course)

// for (let key of courses) console.log(key)


const course1 = courses.find((course) => {   // notice thay course is argument and if we do not wanna have argument we use empty () and if we have just one argument we remove () for course
    return course.name === 'a';
});

console.log(course1)


const course2 = courses.find(course => course.name === 'a')
console.log(course2)
numbers = [1, 2, 3, 4];

numbers.forEach(function(number) {
    console.log(number)
})


numbers.forEach((number, index) => console.log(number, index))
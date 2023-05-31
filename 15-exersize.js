

function calculateMax(number1, number2) {
    if (number1 > number2) {
        return number1
    }
    else if (number2 > number1)
        return number2
}

console.log(calculateMax(60, 60))


function calculateMax2(number1, number2) {
    if (number1 > number2) return number1;
    return number2;
}

console.log(calculateMax2(60, 60))


function calculateMax3(a, b) {
    return a > b ? a : b;
}

console.log(calculateMax3(9, 8))

function isLandScape(width, heigth) {
    return (width > heigth);
}


console.log(isLandScape(1, 3))


// function fizzBuzz(input) {
//     if (input % 15 === 0) return 'fizzBuzz';
//     else if (input % 3 === 0) return 'fizz';
//     else if (input % 5 === 0) return 'buzz';
//     else if (input % 3 || input % 5 ) return input;
//     else return 'Not a Number'
// }

function fizzBuzz(input) {
    if (typeof(input) !== 'number') return 'not a number';
    else if (input % 15 === 0) return 'fizzBuzz';
    else if (input % 3 === 0) return 'fizz';
    else if (input % 5 === 0) return 'buzz';
    else if (input % 3 || input % 5 ) return input;
}

const outPut = 'khk';
// console.log(fizzBuzz(outPut));

console.log(checkSpeed(71))
function checkSpeed(speed) {
    let point = 0;
    if (speed <= 74) return 'ok';
    
    else if (speed > 74) {
        speed -= 70;
        point += Math.floor(speed / 5);
        if (point < 12) {
            return  'point: ' + point;
        }
        else
            return 'sespendod'
        
    }
}


function showNumber(limit) {
    for (let i = 0; i <= limit; i++) {
        let result;
        if (i % 2 === 0) result = ' Even';
        else result = ' Odd';
        console.log(i + result)
    }
}

showNumber(10);

function countTruthy(array) {
    let count = 0;
    for (let key of array) {
        if (key) count += 1

    }
    return count
}

console.log(countTruthy(['', false, NaN, null, 'ali']))


function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "string") console.log(key + ' ' + obj[key])
    }
}


showProperties({name: 'amirhossein', rating: 23, isActive: true, address: 'Tehran'});


function sum(limit) {
    let result = 0;
    for (let i=0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) result += i;
    }
    return result;
}

console.log(sum(10))


function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

showStars(5)

function primeNumbers(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
           
        }
        if (isPrime) console.log(number);

    }
}


primeNumbers(10)
console.log(8 % 2 === 0)
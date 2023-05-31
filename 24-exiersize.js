const address = {
    city: 'Tehran',
    street: 'meng',
    zipCode: '0274927492',
}


function showAddress(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }

}

showAddress(address)


function createAddress(address, city, zipCode) {
    return {
        address: address,
        city: city,
        zipCode: zipCode,
    }
}

const a = createAddress('Tehran', 'Tehran', 2345666)

showAddress(a)


function CreateAddress(city, address, zipCode) {
    this.city = city,
    this.address = address,
    this.zipCode = zipCode
}

const b = new CreateAddress('gharchack', 'zibashar', 77777777)
const c = new CreateAddress('Berlin', 'inha', 66666)

showAddress(b)

function areEqual(address1, address2) {
    return (address1.street === address2.street
         && address1.city === address2.city
          && address1.zipCode === address2.zipCode)

}

function areSame(address1, address2) {
    return address1 === address2    // it checks if the reffrence are equal or not
}


console.log(areEqual(b, c))
console.log(areSame(b, c))




// Post


function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.comments = [],
    this.views = 0,
    this.isLive = false

}

let post = new Post('book1', 'this is good', 'me')

console.log(post)
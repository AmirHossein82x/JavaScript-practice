const person = {
    firstName: 'AmirHossein',
    lastName: 'Ghasemi',

    fullName() {
        console.log(`${this.firstName} ${this.lastName}`) 
    }
};


person.fullName()



const person2 = {
    firstName: 'AmirHossein',
    lastName: 'Ghasemi',

    get fullName() {
        console.log(`${this.firstName} ${this.lastName}`) 
    },

    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('value must be string!');
        }
        
        
        let info = value.split(' ')
        if (info.length !==2) {
            throw new Error('you have to enter first name and last name both')
        }
        this.firstName = info[0],
        this.lastName = info[1]
    }
};


person2.fullName

try {

    person2.fullName = 'ali';
}

catch (e) {
    console.error(e)
}

person2.fullName

console.log(person2)
function someMath(a,b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}


const result = someMath(33,11);
// const sum = result[0];
// const sub = result[1];


const [sum, sub = 'undef' , mult, ...other] = someMath(33,11);

// console.log(other);
// console.log(sub);
// console.log(sum, mult);

const person = {
    name: 'Andrey',
    age: 31,
    address: {
        city: 'Moscow' , country: 'Russia'
    }
};

const { name: jopa, age, car = 'No auto', address: { city: homeTown }} = person;

console.log(jopa);

const { name: firstName, ...info } = person;

console.log(firstName);

function logs({name: firstName, age: vozrast}) {
    console.log(firstName, vozrast)
}

logs(person);

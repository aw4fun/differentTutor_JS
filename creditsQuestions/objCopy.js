var obj = {
    one: 'true',
    two: 2,
    three: {
        one: 'false',
        two: 2,
        three: ['lol', 3, true, undefined]
    }
}


const result = JSON.parse(JSON.stringify(obj));

console.log(result);
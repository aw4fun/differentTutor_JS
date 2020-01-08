
const person = {name:'Andrey'};

function info(phone, email, ...arg) {
    console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email} Test: ${arg}`);
}

// info.bind(person,'12345')('v@mail.ru');
// info.bind(person)('12345', 'v@mail.ru');
// info.bind(person,'12345', 'v@mail.ru')();

// 1 way
// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest);
// }

// 2 way
// function bind(fn, context, ...rest) {
//     return function(...args) {
//         const uniqId = Date.now().toString();
//         context[uniqId] = fn;
//         const result = context[uniqId](...rest.concat(args));
//         delete context[uniqId];
//         return result;
//     }
// }

// 3 way ES5
// function bind(fn, context) {
//     const rest = Array.prototype.slice.call(arguments, 2);
//     return function () {
//         const spread = Array.prototype.slice.call(arguments);
//         return fn.apply(context, rest.concat(spread));
//     }
// }

// 4 way ES6
// function bind (fn, context, ...rest) {
//     return function (...args) {
//         // return fn.apply(context, rest.concat(args));
//         return fn.call(context, ...rest.concat(args));
//     }
// }
// bind(info, person, '12345')('v@mail.ru', 'test');
// bind(info, person)('12345', 'v@mail.ru', 'test');
// bind(info, person, '12345', 'v@mail.ru')('test');

function call(fn, context, ...rest) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...rest);
    delete context[uniqId];
    return result;
}

call(info, person, '1234', 'mail');

function apply(fn, context, args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...args);
    delete context[uniqId];
    return result;
}

apply(info, person, ['1234', 'mail']);


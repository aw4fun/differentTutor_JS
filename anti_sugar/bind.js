
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

// 3 way

bind(info, person,'12345')('v@mail.ru', 'test');
bind(info, person)('12345', 'v@mail.ru', 'test');
bind(info, person,'12345', 'v@mail.ru')( 'test');


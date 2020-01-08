
const person = {name:'Andrey'};

function info(phone, email) {
    console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`);
}

info.bind(person,'12345')('v@mail.ru');
info.bind(person)('12345', 'v@mail.ru');
info.bind(person,'12345', 'v@mail.ru')();
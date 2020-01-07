const users = ['mail@eab.ru','mail@bab.ru' , 'mail@abc.ru', 'mail@cab.ru', 'mail@dce.ru'];

const sortEmail = (arr) =>
    arr.sort((a, b) =>
        (a.slice(a.indexOf('@') + 1) > b.slice(b.indexOf('@') + 1)) ? 1 : 0);
console.log(sortEmail(users));
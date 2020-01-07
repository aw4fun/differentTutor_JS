const users = ['mail@eab.ru','mail@bab.ru' , 'mail@abc.ru', 'mail@cab.ru', 'mail@dce.ru'];

function sortEmail(arr) {
    return arr.sort((a, b) => b.match(/@(\S+)/)[1] < a.match(/@(\S+)/)[1]);
}
console.log(sortEmail(users));
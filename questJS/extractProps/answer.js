const extractProps = (arrObj, prop) => {
    let res = [];
    arrObj.forEach( item => {prop in item ? res.push(item[prop]): 0});
    return res;
};

const objArr = [
    {name: 'Vasya', age: '19'},
    {name: 'Sashe', age: '20'},
    {name: 'Petya', age: '21'},
    {name: 'Pasha', age: '22'},
    {name: 'Senya', age: '23'},
];

console.log(extractProps(objArr,'name'));
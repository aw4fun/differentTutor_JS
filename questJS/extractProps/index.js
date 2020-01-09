function extractProps(arrObj, prop) {
    return  temp = arrObj.map(item => item[prop]);
}

const objArr = [
    {name: 'Vasya', age: '19'},
    {name: 'Sashe', age: '20'},
    {name: 'Petya', age: '21'},
    {name: 'Pasha', age: '22'},
    {name: 'Senya', age: '23'},
];

console.log(extractProps(objArr, 'age'));
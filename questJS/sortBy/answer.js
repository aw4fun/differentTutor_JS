const users = [
    {name: 'Semen', lang: 'ActionScript', age: 31},
    {name: 'Vasya', lang: 'EcmaScript', age: 21},
    {name: 'Petya', lang: 'JavaScript', age: 29},
    {name: 'Jenya', lang: 'PythonScript', age: 30},
    {name: 'Sasha', lang: 'PHPScript', age: 19},
    {name: 'Pasha', lang: 'KotlinScript', age: 24},
];

const sortBy = (u, p) => u.sort((a, b) => a[p] - b[p]);
console.log(sortBy(users, 'age'));
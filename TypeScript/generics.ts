const arr: Array<number|string> = [1, 2, '3', 4];

interface IUser {
    id: number,
    name: string,
    age: number
}

const users: Array<IUser> = [
    {id:1, name:'Vasya', age:32},
    {id:2, name:'Petya', age:31},
    {id:3, name:'Jora', age:30},
    {id:4, name:'Senya', age:29},
];

// v equal ^

const users2: IUser[] = [
    {id:1, name:'Vasya', age:32},
    {id:2, name:'Petya', age:31},
    {id:3, name:'Jora', age:30},
    {id:4, name:'Senya', age:29},
];

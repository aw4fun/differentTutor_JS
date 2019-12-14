let users = [
  {name:'Andrey'},
  {age: 31},
  {job: 'JS-dev'}
];

const ws = new WeakSet();



ws.add(users[0]).add(users[1]);
users.splice(1,1);

console.log(users);
console.log(ws.has(users[1]));

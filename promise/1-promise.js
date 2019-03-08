
// Pending
const promise1 = new Promise((resolve) => {
  setTimeout(()=>{
    resolve(`Hello`)
  },0)
});

  promise1
    .then(()=>{},
      err => {
      console.log(err.message);
      })
    .catch(err => {
      console.log(err.message)
    });

  console.dir({promise1});
  promise1.then(console.log);


// Immediate resolve
const promise2 = new Promise(resolve => resolve(`value`));
console.dir({promise2});
promise2
  .then(()=> console.log,
      err => {console.log(err.message)})
  .catch(err => {console.log(err.message)});


// Immediate reject
const promise3 = new Promise( (resolve, reject) => {
  reject(new Error(`Haven't value for you`));
});
console.dir({promise3});
promise3
  .then(console.log, err => console.log(err.message))
  .catch(console.log);

// Promise.resolve
const promise4 = Promise.resolve(`value4`);
console.dir(promise4);
promise4
  .then(console.log)
  .catch(err => console.log(err.message));

// Promise.reject
const promise5 = Promise.reject(new Error(`Error: AAAaaaaa !!!`));
console.dir({promise5});
promise5
  .then(console.log)
  .catch(err => console.log(err.message));

// Example with I\O

const fs = require(`fs`);

const readFile = (filename, encoding) => new Promise( (resolve, reject) => {
  fs.readFile(filename,encoding, (err, data) => {
    if (err) {
      return reject(err)
    } else {
      resolve(data.toString())
    }
  });
});

readFile(`file1.txt`, `utf8`)
  .then(data=> {
  console.log(data);
  return readFile(`file2.txt`, `utf8`);
  })
  .then(data=> {
  console.log(data);
  return readFile(`file3.txt`, `utf8`);
  })
  .then(data=> {console.log(data)});
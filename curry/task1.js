const curry = function (fn) {
  let arity = fn.length;
  // console.log(`arity`, arity);

  return function f1 (...args) {
    // console.log(`f1 args`, args);
    if (args.length >= arity){
      // console.log(`enough args`);
      return fn(...args);
    } else {
      // console.log(`need more args`);
      return function f2 (...moreArgs) {
        // console.log(`f2`, moreArgs);
        let newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      }
    }
  }
};

/**/

let objData = [
  {id:1},
  {id:2},
  {id:3},
  {id:4}
];

let get = curry(function (props, object) {
  return object[props]
});

// let result = obj.map(function (object) {
//   return object.id;
// });

let result = objData.map(get(`id`));

let getIds = function (objData){
  return objData.map(get(`id`));
};

let map = curry(function (fn, values) {
  return values.map(fn);
});

let getIds2 = map(get(`id`));
console.log(getIds2(objData));
console.log(getIds(objData));
console.log(result);


/**/

let fetchFromServer = function () {
  return new Promise(function (resolve) {
    resolve({
      user: `Jack`,
      posts: [
        {
          title: `why curry?`
        },
        {
          title: `functional programming`
        }
      ]
    })
  })
};



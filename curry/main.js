const curry = function (fn) {
  let arity = fn.length;
  console.log(`arity`, arity);

  return function f1 (...args) {
    console.log(`f1 args`, args);
    if (args.length >= arity){
      console.log(`enough args`);
      return fn(...args);
    } else {
      console.log(`need more args`);
      return function f2 (...moreArgs) {
        console.log(`f2`, moreArgs);
        let newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      }
    }
  }
};

const add = (a,b,c) => {
  return a + b + c;
};

const  curriedAdd = curry(add);

let result = curriedAdd(1,2,3);

console.log(result);
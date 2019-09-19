module.exports = curry = (fn) => {
  let arity = fn.length;

  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
      let newArgs = args.concat(moreArgs);
      return f1(...newArgs);
      }
    }
  }
};


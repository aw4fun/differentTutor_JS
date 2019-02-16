
const arr = ["A", "n", "d", "r", "e", "y"];

console.log(arr.reverse());

const result = arr.reduceRight((previousValue, value) => { // call something in the reverse order
  console.log(`prevResult=${previousValue}`,
              `value=${value}`,
              `will return ${previousValue + value}`);
  return previousValue + value
},"Hello "); // "Hello " - initial value for previousValue
console.log(result);

/**/

const compose = (...funcs) => (comp) => {
  funcs.reduceRight((prevResult, fn)=> {
    return fn(prevResult);
  }, comp);
};
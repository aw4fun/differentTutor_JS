
const fibonacci = (n) => {
  if ( n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};


console.log(fibonacci(14));

const fibIter = (n) => {
  let a = 1;
  let b = 0;
  let c = 0;
  let counter = n;

  while (counter > 0) {
    c = a + b;
    b = a;
    a = c;
    counter--;
  }
  return b;
};

console.log(fibIter(14));
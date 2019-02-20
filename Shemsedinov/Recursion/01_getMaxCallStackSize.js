
// функция, которая определяет саму себя.

const 01 = i => {
  try {
    return 01(++i);
  } catch (e) {
    return i;
  }
};

console.log(01(0)); // call stack depth 12524


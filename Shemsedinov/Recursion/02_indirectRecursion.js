// Неявная, косвенная рекурсия


  function f(x) {
    return g(x);
  }

  function g(x) {
    return f(x);
  }

f(0);
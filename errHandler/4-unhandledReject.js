const sum = (a, b) => new Promise ((resolve, reject) => {
  if (typeof a === "number" && typeof b === "number") {
    resolve (a + b);
  } else {
    reject (new Error("a and b should be numbers"));
  }
});

sum(3, `s`)
  .then( data => {
    console.log({data});
  });



/*ошибка с последующим стэктрэйсэм вылетит в консоль, код после ошибки продолжает выполняться*/
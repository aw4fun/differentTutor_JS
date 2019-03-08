/*перехват ошибки в then*/

const sum = (a, b) => new Promise ((resolve, reject) => {
  if (typeof a === "number" && typeof b === "number") {
    resolve (a + b);
  } else {
    reject (new Error("a and b should be numbers"));
  }
});

sum(3, `s`)
  .then( data => { // положительный результат (resolve)
    console.log({data});
  },
    err => {       // отрицательный результат (reject)
      console.log({messageThen1: err.message});
      throw new Error(`Oh, no!`);
    }
  )
  .catch(err => {
    console.log({messageCatch1: err.message});
    throw new Error(`Oh, noo!`);
    }
  )
  .then(()=>{}, err=>{
    console.log({ messageThen2: err.message });
    throw new Error(`Oh, nooo!`);
    }
  )
  .catch(err => {console.log({ messageCatch2: err.message })});

/*каждое возникновение\пробрасывание ошибки отлавливается выше по стеку*/
/* "опасные обработчики вторым аргументом в then, "безопасные в catch" */
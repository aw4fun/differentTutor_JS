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

let map = curry(function (fn, values) {
  return values.map(fn);
});

let get = curry(function (props, object) {
  return object[props];
});

/* curry */

fetchFromServer()
  .then(get(`posts`))
  .then(map(get(`title`)))
  .then(function (titles) {
    console.log(`titles: ${titles}`)
  })
  .catch(err => {
    console.log(err.message)
  });

/*Vanilla*/

fetchFromServer()
  .then(function (data) {
    return data.posts;
  })
  .then(function (posts) {
    return posts.map(function (post) {
      return post.title
    })
  })
  .then(function (titles) {
    console.log(`titles: ${titles}`)
  })
  .catch(err => {
    console.log(err.message)
  });


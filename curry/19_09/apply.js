const curry  = require('./helper');
const object = new Array(3).fill( {id: 0}).map( (item,index) => item = {id: index});

let get = curry(function (property, object) {
  return object[property];
});

let map = curry(function (fn, values) {
   return values.map(fn)
});

let getIds = map(get('id'));
console.log(getIds(object));

//<ss
let fetchFromServer = function () {
  return new Promise( function (resolve) {
    resolve({
      user: 'Vasya',
      posts: [
        {title: 'some title'},
        {title: 'not same title'},
      ]
    })
  })
};

// Vanilla JS;
fetchFromServer()
  .then(function (data) {
    return data.posts;
  })
  .then(function (posts) {
    return posts.map(function (post) {
      return post.title;
    })
  })
  .then( function (titles) {
    console.log('Vanilla titles', titles)
  })
  .catch( function (err) {
    console.log(err.message)
  });
//

// func programming
fetchFromServer()
  .then(get('posts'))
  .then(map(get('title')))
  .then( function (titles) {
    console.log('Curry titles', titles)
  });
//

//>ss
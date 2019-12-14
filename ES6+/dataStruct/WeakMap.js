let obj = {
  name: 'Vasya'
};
const arr = [obj];
obj = 1;

const wmCache = new WeakMap();
let test1 = {name: 'test1'};
let test2 = {name: 'test2'};

function cacheUser(user) {
  if (!wmCache.has(user)){
    wmCache.set(user, Date.now())
  }
  return wmCache.get(user)
}

cacheUser(test1);
cacheUser(test2);

test1 = null;

console.log(wmCache.has(test1));
console.log(wmCache.has(test2));

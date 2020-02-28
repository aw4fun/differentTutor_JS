function highestRank(arr){
//Your Code logic should written here
  let result = arr.reduce((accum, item) => {
      if (accum.hasOwnProperty(item)) {
          accum[item] +=1
      } else  {
          accum[item] = 1;
      }
      return accum;
  }, {});

  let temp = Object.keys(result).sort((a,b) => result[b] - result[a]);
  return parseInt(temp[0]);
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr));

const wall = `##########
####0##0##
00##0###00`;

let stoneWall = function() {
  let step1 = wall.split('\n');
  let step2 = step1.map(item => {
    return item.split('');
  });
  return step2;
}();

console.log(stoneWall);
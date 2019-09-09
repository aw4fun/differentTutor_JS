
const data = [
  [ 0,  0,   0,   0, 'C'],
  [ 0,  0,   0,   0,  0],
  [ 0,  0,  'Y',  0,  0],
  ['M', 0,   0,   0, 'S']
];

function mainCalc() {
  let heightY = data.length;
  let widthX = data[0].length;
  let startPoint = {x:1, y:1};
  let compass;
  let map;
  let spyglass;

  data.map( (item, index) => {
    item.indexOf('Y') !== -1 ? startPoint = {x: item.indexOf('Y'), y: index} : '';
    item.indexOf('C') !== -1 ? compass = {x: item.indexOf('C'), y: index} : '';
    item.indexOf('M') !== -1 ? map = {x: item.indexOf('M'), y: index} : '';
    item.indexOf('S') !== -1 ? spyglass = {x: item.indexOf('S'), y: index} : '';
  });
  function calcDiff() {
    let diffs = {c: compass.x || compass.y, m: map.x || map.y, s: spyglass.x || spyglass.y};
    console.log('before modify', diffs);
    for (let key in diffs) {
      diffs[key] = diffs[key] - (startPoint.x || startPoint.y);
    }
    console.log('Diffs',diffs);
  }
  calcDiff();
}



mainCalc();
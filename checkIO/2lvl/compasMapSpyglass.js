
const data = [
  [ 0,    0,   0, 'C', 0],
  [ 0,  'M',   0,   0, 0],
  [ 0,    0, 'Y', 'S', 0],
  [ 0,    0,   0,   0, 0]
];

function mainCalc() {
  let heightY = data.length;
  let widthX = data[0].length;
  let startPoint;
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
  let lengthC = Math.max(Math.abs(startPoint.x - compass.x), Math.abs(startPoint.y - compass.y));
  let lengthM = Math.max(Math.abs(startPoint.x - map.x), Math.abs(startPoint.y - map.y));
  let lengthS = Math.max(Math.abs(startPoint.x - spyglass.x), Math.abs(startPoint.y - spyglass.y));
  console.log( startPoint, compass, map, spyglass);
  console.log( lengthS, lengthM, lengthC);
  console.log(Math.max(Math.abs(startPoint.y - compass.y), Math.abs(startPoint.x - compass.x)));
  return (lengthC + lengthM + lengthS);
  }
  return  calcDiff();
}

mainCalc();
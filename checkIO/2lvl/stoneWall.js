function calcWall() {
  const stoneWall = [
    ['#','#','#','#','#','#','#','#','#','#'],
    ['#','#','#','#',0,'#','#',0,'#','#'],
    [0,0,'#','#',0,'#','#','#',0,0]
  ];

  function f() {
    let startRow = stoneWall.length -1;
    let container = new Array(stoneWall[0].length).fill(0);
    for (let i = startRow; i >= 0 ; i--) {
      if (stoneWall[i].every(c => c === "#")){
        break;
      } else {
        stoneWall[i].map((item, index) => {
          if (item === 0 && container[index] !== '#') {
            container[index] += 1;
          } else {
            container[index] = "#";
          }
        })
      }
    }

    let answer = function () {
      let temp = 0;
      container.map( i => {
        if (typeof i == 'number') {
          temp = i || temp;
        }
      });
      return temp;
    }();
    let idx = container.findIndex( item => item === answer);
    return idx;
  }
  return f();
};

console.log(calcWall());
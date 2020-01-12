function nearestDistance(point, arr) {
    let tmp = [];
        arr.map((item, idx) => {
        tmp.push({
            idx,
            weight: Math.max(Math.abs(item.x - point.x), Math.abs(item.y - point.y))});
    });
        tmp.sort((a, b) => a.weight - b.weight);
    return tmp[0].idx;
}

let arr = [
    {x:10, y:10},
    {x:2, y:5},
    {x:3, y:4}
];

console.log(nearestDistance({x:4, y:6}, arr));

let pattern = [
    'X',0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0,'2',0,0,0,0,0, 0,
     0 ,0,'1',0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0, 0,
     0 ,0 ,0 ,0 ,0,0,0,0,0,'0',
];
var number = function(busStops){
    return busStops.reduce((accum, item)=> {
        accum += item[0] - item[1];
        return accum;
    }, 0);
};
console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
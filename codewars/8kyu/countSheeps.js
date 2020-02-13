function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.reduce((accum, item) =>
        item === true ? accum +=1 : accum + 0, 0)
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countSheeps(array1));
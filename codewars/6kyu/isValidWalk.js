function isValidWalk(walk) {
    //insert brilliant code here
    if (!walk.length) return true;

    let relations = new Set(walk);

    if (relations.size == 2) {
        if (
                (relations.has('n') && relations.has('s'))
            ||  (relations.has('w') && relations.has('e'))
        ) {
        } else  {
            return false;
        }
    }


    let data = walk.reduce((accum, step) => {
        if (accum.hasOwnProperty(step)) {
            accum[step] += 1;
        } else {
            accum[step] = 1;
        }
        return accum;
    }, {});

    let result = Object.values(data) ;
    if (result.length % 2 == 1) return false;

    let total;
    let uniq = result.reduce((accum, step) => {
        if (accum.hasOwnProperty(step)) {
            accum[step] += 1;
        } else {
            accum[step] = 1;
        }
        return accum;
    }, {});

    for (let key in uniq) {
        if (uniq[key] % 2 == 1) return false;
    }


    if (result.length / 2 == new Set(result).size) {
        total = result.reduce((accum, item) => {
            return accum += item;
        }, 0);
        return total == 10 ? true : false;
    }
    return false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk([ 'e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w' ]));
// console.log(isValidWalk([ 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w' ]));
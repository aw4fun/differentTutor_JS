const search = (n) => {
    let res = {}, tmp, par = [5000,2000,200,100];
    par.forEach(e => {
        tmp = n % e;
        if((n - tmp)/e){
            res[`${e}`] = (n - tmp) / e;
        }
        n = tmp;
    });
    return res;
};

console.log(search(12100));
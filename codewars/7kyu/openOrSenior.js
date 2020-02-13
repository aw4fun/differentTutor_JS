function openOrSenior(data){
   return data.reduce((accum, item) => {
       if ((item[0] >= 55) && (item[1] > 7)) {
          accum.push('Senior');
        } else {
           accum.push('Open');
       }
       return accum;
    }, []);
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
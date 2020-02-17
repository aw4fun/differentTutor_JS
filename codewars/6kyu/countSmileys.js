function countSmileys(arr) {

   const reg = /([:;]+[-~]?[)D])/;
   return arr.reduce((accum, item) => {
       if (reg.test(item)) {
           accum +=1;
       } else {
           return accum;
       }
       return accum;
   }, 0);

}

console.log(countSmileys([':D',':~)',';~D',':)']));
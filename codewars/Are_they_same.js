function comp(arr1, arr2){
  //your code here
  let flag = true;

  if (!arr1 || !arr2) return false;
  arr1.map( item => {
    if (parseInt(item) && item != 0) {
      if (!arr2.includes(item * item)) {
        flag = false;
      } else {
       let temp = arr2.indexOf(item*item);
       if (temp) {
         arr2 = arr2.slice(temp,1);
       }
      }
    } else {
      flag = false;
    }
  });
  return flag;
}



a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2));
let btn = document.querySelector('button');
    btn.addEventListener('click', function () {
    console.log('hi');
    });

function autoReplace( needles, change, haystack ) {

   if (needles && change && haystack ) {
       let arrHaystack = haystack.split(' ');
       console.log('hi', arrHaystack);

       arrHaystack.map( (word, idx) => {
           if (needles.includes(word.toLowerCase())) {
               arrHaystack[idx] = change;
               console.log('include', word);
           }
       });
       console.log('Final array is:', arrHaystack.join(' '));
       return arrHaystack.join(' ');
   } else {
       return false;
   }
}

autoReplace(['черный','зашел'], 'селедка', 'Черный хлеб зашел шедеврально');
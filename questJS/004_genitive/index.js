let btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        console.log(genitive(115,{singular:'орех', many1:'ореха', many2:'орехов'}));
    });

    function genitive(n, word) {
        let wordKey = word.many2;
        if (n % 100 < 5 || n % 100 > 20) {
            if (n % 10 === 1) wordKey = word.singular;
            if (n % 10 > 1 && n % 10 < 5 ) wordKey = word.many1;
        }
        return `${n} ${wordKey}`;
    }
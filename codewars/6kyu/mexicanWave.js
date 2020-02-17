function wave(str){
    let result = [];
    let strExample = str.split('');
    strExample.map((word, index) => {
        let temp = strExample.slice();
        if (/\w/.test(word)) {
            temp[index] = word.toUpperCase();
            result.push(temp.join(''));
        }
    });
    return result;
}

console.log(wave("two words"));
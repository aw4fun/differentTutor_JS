function expandedForm(num) {
    // Your code here
    let strToArray = num.toString().split('');
    let result = [];
    strToArray.map((item, index) => {
        if (item != '0') {
           result.push(item.padEnd(strToArray.length - index, '0'));
        }
    });
    return result.join(' + ');
}

console.log(expandedForm(12));
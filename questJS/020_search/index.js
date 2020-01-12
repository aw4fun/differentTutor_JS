function search(n) {
    const bank = [5000,2000,200,100];
    let balance = n;
    let answer = {};

    bank.map( item => {
        let tmp = Math.floor(balance / item);
        tmp ? answer[`${item}`] = tmp : null;
        balance = (balance % item);
    });
    return answer;
}

console.log(search(12100));
Array.prototype.mul = function(n) {
    return this.map(e => e * n);
};


let d = [34, 5];

console.log(d.mul(2));
console.log(d.mul(3));
console.log(d.mul(''));
console.log(d.mul('v'));
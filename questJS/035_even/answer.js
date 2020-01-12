Number.prototype.even = function() {
    return this % 2 ? 0 : 1;
};

let n = 43;
n.even();
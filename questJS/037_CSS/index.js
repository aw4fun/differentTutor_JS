class CSS {

    _checkBorder(n) {
        if (n > 255) return 255;
        if (n < 0) return 0;
        return Math.round(n);
    }
    static rgb(r, g, b) {
        return `rgb(${this.prototype._checkBorder(r)},${this.prototype._checkBorder(g)},${this.prototype._checkBorder(b)})`
    }
}

console.log(CSS.rgb(23, 56, 100));
console.log(CSS.rgb(323, -56, 36.6));
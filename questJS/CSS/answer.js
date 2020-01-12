class CSS {
    static rgb(...c) {
        c = c.map( n => n < 0 ? 0 : n > 255 ? 255 : Math.round(n));
        let [r,g,b] = c;
        return `rgb(${r},${g},${b})`; // or return `rgb(${c.join(',')})`;
    }
}

console.log(CSS.rgb(23, 56, 100));
console.log(CSS.rgb(323, -56, 36.6));
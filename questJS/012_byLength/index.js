function byLength(arr) {
    return arr.sort((a, b) => b.length - a.length);
}
console.log(byLength(['cat', 'puppet', 'tiger', 'pimp']));
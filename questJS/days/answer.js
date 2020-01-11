const days = () => {
    let
        curr = new Date(),
        next = new Date(curr.getFullYear() + 1,0),
        diff = next - curr;
        diff /= 1000*60*60*24;
        return Math.floor(diff);
};

console.log(days());
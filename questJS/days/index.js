function days() {
    return Math.floor((new Date('2021') - Date.now())/ (24 * 60 * 60 * 1000));
}

console.log(days());
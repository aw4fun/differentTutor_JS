function validPhone(phone) {
    let check = ~phone.search('[A-z]');
    if (check) return false;
    phone = ~phone.search('^[^\+]') ? '+'.concat(phone).toString() : phone;
    return  phone.padEnd(12, '_');
}

console.log(validPhone('92509792'));
console.log(validPhone('+925097927'));
console.log(validPhone('B92509792'));
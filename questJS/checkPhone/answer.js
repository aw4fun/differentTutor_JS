const validPhone = (phone) => {
    if (!/^\+\d{0,11}/.test(phone)) return false;
    let res = '+____________'.split('');
    res.splice(0, phone.length, phone);
    return res.join('');
};


console.log(validPhone('92509792'));
console.log(validPhone('+925097927'));
console.log(validPhone('B92509792'));
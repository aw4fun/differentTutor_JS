// let digits = [123405, 999, 1000, 1111];

function digitsMultip (digit) {

    let contain = 1;


    digit = digit.toString(10);
    console.log(`Digit type is is: ${typeof digit}`);

    for (let i = 0; i < digit.length ; i++) {
        if (Number(digit[i]) === 0)
            continue;
        contain *= Number(digit[i]);
    }
    console.log(contain);

    return contain;
}

// вместо continue можно сделать через тернарный (? :)

digitsMultip(123405);


/*if (!global.is_checking) {
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}*/
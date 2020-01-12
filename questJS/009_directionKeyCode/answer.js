const directionKeyCode = keyCode => ({
    '87':'up \u2191',
    '65':'left \u2190',
    '68':'right \u2192',
    '83':'down \u2193'
})[keyCode];


console.log(directionKeyCode(87));
console.log(directionKeyCode(65));
console.log(directionKeyCode(68));
console.log(directionKeyCode(83));
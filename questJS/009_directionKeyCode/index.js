function directionKeyCode(keyCode) {
    switch (keyCode) {
        case 87: {
            return 'up \u2191';
        }
        break;
        case 65: {
            return 'left \u2190';
        }
        break;
        case 68: {
            return `right \u2192`;
        }
        break;
        case 83: {
            return 'down \u2193';
        }
        break;
        default: console.log('default');
    }
}

console.log(directionKeyCode(87));
console.log(directionKeyCode(65));
console.log(directionKeyCode(68));
console.log(directionKeyCode(83));
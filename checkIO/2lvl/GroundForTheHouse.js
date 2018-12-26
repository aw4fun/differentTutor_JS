/*function house(plan) {
    const start = c => c.indexOf('#') + 1
    const end = c => c.lastIndexOf('#') + 2

    const boundary = plan.trim()
    .split('\n')
    .reduce(  (t,c,i) =>
            c.includes('#') ?
                {
                    minX: t.minX ? Math.min( t.minX, start(c) ) : start(c),
                    maxX: Math.max( t.maxX, end(c) ),
                    minY: t.minY ? t.minY : i + 1,
                    maxY: i + 2
                } :
                t
        , { minX: 0, maxX: 0, minY: 0, maxY: 0})

    const houseSize = ({maxX, minX, maxY, minY}) => (maxX - minX) * (maxY - minY)

    return houseSize(boundary)
}*/

let plan = `
0000000
##00##0
######0
##00##0
#0000#0
`;

function house(plan) {
	let arrHouse = plan.trim().split("\n");
	let homePoints = [];

	let first;
	let second;
	let third;

	for (let i = 0; i < arrHouse.length; i++) {

		first = arrHouse[i].indexOf("#");
		second = arrHouse[i].lastIndexOf("#");

		if (first === second) {
			first = second += 1;
		} else {
			second += 1;
		}

		if (first === -1) {
			homePoints[i] = 0;
		} else if (first === second) {
			homePoints[i] = first;
		} else if (first === 0) {
			homePoints[i] = second;
		} else {
			third = second - first;
			homePoints[i] = third;
		}
	}

	while (homePoints[0] === 0) {
		homePoints.shift()
	}

	for (let i = homePoints.length - 1; i > 0; i--) {

		if (homePoints[i] === 0) {
			homePoints.pop();
		} else {
			break;
		}
	}

	function compare(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		// a должно быть равным b
		return 0;
	}

	homePoints.sort(compare);

	third = homePoints[homePoints.length-1] * homePoints.length;
	if (isNaN (third)) { third = 0;}
	return third;
}

let answer = house(plan);

console.log(answer);



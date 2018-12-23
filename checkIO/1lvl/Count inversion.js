/*function countInversion(sequence){
    let result = 0;
    sequence.forEach((v, i) => {
        sequence.forEach((v2, j) => {
            if (j > i && v > v2) result++;
        });
    });
    return result;
}*/


let data = [1,2,5,3,4,7,6];
let data1 = [1,2,3,4,5];
let data2 = [5,3,2,1,0];

function countInversion (sequence) {
  let	counter = 0;
	let swapper = 0;

	for (let b = 0; b < sequence.length-1 ; b++) {

		for (let i = 0; i < sequence.length -1 ; i++) {
			let j = i + 1;
			if (sequence[i] > sequence[j]) {
				swapper = sequence[j];
				sequence[j] = sequence[i];
				sequence[i] = swapper;
				counter ++;
			}
		}

	}
	return counter;
}

countInversion(data);
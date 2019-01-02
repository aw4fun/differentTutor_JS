function GetSum(a,b) {

	let answer;

	if (a === b) {
		return answer = a;
	}

	if (a < b) {

		answer = a;
		for (let i = a + 1; i = b; i++) {

			answer += i;
		}
	} else {
		answer = b;
		for (let i = b +1; i < a ; i++) {
			answer += i;
		}
	}
console.log(answer);
return answer;
}

GetSum(27,-582);

// занимает много времени

/*
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
*/
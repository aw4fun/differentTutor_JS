/*function twoTeams(sailors) {
  return [
    Object.keys(sailors).filter(s => sailors[s] > 40 || sailors[s] < 20).sort(),
    Object.keys(sailors).filter(s => sailors[s] <= 40 && sailors[s] >= 20).sort()
  ];
}*/

let persons = {"Coleman":45,"Wesson":22,"Smith":34,"Abrahams":19};


function twoTeams(sailors) {
	let team1 = [];
	let team2 = [];
	let result;

	for (let key in sailors) {

		if (!sailors.hasOwnProperty(key)) {
		continue;
		}

		if (sailors[key] > 40 || sailors[key] < 20) {
			team1.push(key);
		} else {
			team2.push(key);
		}
	}
	result =  [
		team1.sort((a,b) => a > b),
		team2.sort((a,b) => a > b)
	];
	console.log(result);
	return result;
}

twoTeams(persons);


// }
//
// 		console.log(data)
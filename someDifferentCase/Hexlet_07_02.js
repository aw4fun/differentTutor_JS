
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};


function getIn(data, keysArray) {
  let result = data;
  keysArray.forEach(item => {
    result = (result.hasOwnProperty(`${item}`))
      ? result[`${item}`]
      : null;
  });
  console.log(result);
}

function getOn(data, keysArray){
  let result = data;

  for (let i = 0; i < keysArray.length ; i++) {
    if (result.hasOwnProperty(keysArray[i])) result = result[keysArray[i]];
    else {
      result = null;
      break;
    }
  }
  console.log(result);
}

function getDW(data, keysArray) {
  let result = data;
  let i = 0;

  do{
    result = (result.hasOwnProperty(keysArray[i])) ? result[keysArray[i]] : null;
    i++;
  }while(result !== null && i < keysArray.length);
  console.log(result);
}

getDW(data, ['undefined']);
getDW(data, ['user']);
getDW(data, ['user', 'ubuntu']);
getDW(data, ['hosts', 1, 'name']);
getDW(data, ['hosts', 0]);
getDW(data, ['hosts', 1, null]);
getDW(data, ['hosts', 1, 'active']);

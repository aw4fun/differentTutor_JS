function isPangram(string){

  let alphabetArr = string.toLowerCase().match(/[A-z]{1}/gm);
  let uniqSymbols = new Set(alphabetArr);

  return uniqSymbols.size === 26;
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
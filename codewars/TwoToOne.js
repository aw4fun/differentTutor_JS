function longest(s1, s2) {
  // your code

  let result = s1 + s2;
  result = new Set(result.split(''));
  result = Array.from(result);

  return result.sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"));
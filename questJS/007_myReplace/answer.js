const myReplace = (s1, s2, s3) => s1.split(s2).join(s3);

console.log(myReplace("Жопа рука, Нарва - река", "р", "п"));
console.log(myReplace("Жопа рука, Нарва - река", "Ж", "п"));
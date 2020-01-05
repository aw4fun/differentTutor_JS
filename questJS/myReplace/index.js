function myReplace(s1, s2, s3) {
    return s1.replace(new RegExp(s2, 'gi'), (letter) => {
       let isUpperCase = letter === letter.toUpperCase();
       return isUpperCase ? s3.toUpperCase() : s3;
    });
}
console.log(myReplace("Жопа рука, Нарва - река", "р", "п"));
console.log(myReplace("Жопа рука, Нарва - река", "Ж", "п"));
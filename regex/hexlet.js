const nXfn = /x[eaoy]n/;
const xfn = /x[f]n/;

const nBlog = /[^b]log/;
const email = /^([a-z0-9_\.]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

const reg = new RegExp("/dssad/", "igm");
const str = 'tralalala';


reg.test('dsadasdas');                 // есть ли совпадение в строке         : boolean
reg.exec('dsadasdas');                 // поиск совпадений в строке           : array

str.search('');                       // поиск совпадений в строке           : idx / -1
str.match('');                        // поиск совпадений в строке           : array/null
str.replace('', '');  // поиск совпадений и замена           : string
str.split('');                      // разбиение строки на массив подстрок : array


let Bike = function (params) {
	this.name = params.name;
	this.category = params.category;

	// this.playTrack = function () {
	// 	return console.log("we started playing", this.name); // можно объявлять через прототип
	// };
};

Bike.prototype.playTrack = function () {
	console.log("we started playing", this.name);
};

let bike1 = new Bike({
	name: "Cervelo",
	category: "Sport"
});

let bike2 = new Bike({
	name: "WeThePeople",
	category: "BMX"
});

bike1.playTrack();
console.log(bike2);


/*
Если мы напишем в консоли

Track.prototype

то это выведет нам обьект с функцией playTrack внутри.
Если мы закомментируем код с prototype и раскомментируем код playTrack внутри конструктора,
то мы увидим что Track.prototype в консоли - это пустой обьект,
а значит функцию playTrack мы никак не можем изменить
*/



/*Мы хотим, чтобы наш конструктор YoutubeBike выполнял все ту же логику, что и Bike только с небольшими изменениями*/

let YoutubeBike = function (params) {
	Bike.apply(this, arguments);
	this.image = params.image;
};

/*Что это делает? Apply вызывает функцию Bike (в данном случае это конструктор),
передавая контекстом this, т.е. контекст YoutubeBike и передаем все аргументы,
которые будут переданы в наш YoutubeTrack.*/


/*
Теперь мы хотим, чтобы все методы, которые нам доступны в классе Track, были так же доступны в YoutubeTrack.
Как мы можем видеть, в экземплярах трека у нас есть функция playTrack и мы хотим, чтобы она была доступна в YoutubeTrack.
Для этого нам нужно реализовать наследование.
*/

YoutubeBike.prototype = Object.create(Bike.prototype);

/*
Но есть один минус. Если мы напишем в консоли
youtubeBike.prototype.constructor
мы увидим здесь не конструктор youtubeBike, а конструктор Bike. Как это исправить?
*/

YoutubeBike.prototype.constructor = YoutubeBike;

YoutubeBike.prototype.playTrack = function () {
	console.log("Hello Youtube", this.name);
};


let youtubeBike1 = new YoutubeBike({
	name: "youtubeBike1",
	category: "youtubeBike1.mp3",
	image: "youtubeBike"
});


let youtubeBike2 = new YoutubeBike({
	name: "youtubeBike2",
	category: "youtubeBike2.mp3",
	image: "youtubeBike"
});

/*Мы хотим, чтобы наш конструктор YoutubeBike выполнял все ту же логику, что и Bike только с небольшими изменениями*/

console.log(youtubeBike1);
console.log(youtubeBike2);

youtubeBike2.playTrack();
youtubeBike1.playTrack();





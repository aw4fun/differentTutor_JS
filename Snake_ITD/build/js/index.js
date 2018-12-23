let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;
let blockSize = 10;
let widthInBlock = width / blockSize;
let heightInBlock = height / blockSize;
let score = 0;

let drawBorder = function () { // отрисовка границ канваса
	ctx.fillStyle = "Gray";
	ctx.fillRect(0, 0, width, blockSize);
	ctx.fillRect(0, height-blockSize, width, blockSize);
	ctx.fillRect(0, 0, blockSize, height);
	ctx.fillRect(width-blockSize, 0, width, height);
};

let drawScore = function () { // Выводит счет игры в левом верхнем углу
	ctx.font = "20px Courier";
	ctx.fillStyle = "Black";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Score: " + score, blockSize, blockSize);
};

let gameOver = function () { // определяет конец игры и выводит drawScore на экран
	clearInterval(intervalId);
	ctx.font = "60px Courier";
	ctx.fillStyle = "Black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("Game Over", width /2, height/2);
};

let circle = function (x, y, radius, fillCircle) { // функция для рисования окружности
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, false)
	if (fillCircle) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
};

let Block = function (col, row) {
	this.col = col;
	this.row = row;
};

Block.prototype.drawSquare = function (color) { // метод, рисующий квадрат
	let x = this.col * blockSize;
	let y = this.row * blockSize;
	ctx.fillStyle = color;
	ctx.fillRect(x, y, blockSize, blockSize)
};

Block.prototype.drawCircle = function (color) { // метод, рисующий круг
	let centerX = this.col * blockSize + blockSize / 2;
	let centerY = this.row * blockSize + blockSize / 2;
	ctx.fillStyle = color;
	circle(centerX, centerY, blockSize/2, true);
};

Block.prototype.equal = function (otherBlock) { // метод сравнивает ячейки и проверяет, не находятся ли они в одном месте
	return this.col === otherBlock.col && this.row === otherBlock.row;
};

let Snake = function () { // Base snake body
	this.segments = [
		new Block(7,5),
		new Block(6,5),
		new Block(5,5),
	];
	this.direction = "right";
	this.nextDirection = "right";
};


Snake.prototype.draw = function () { // Рисуем квадратик для каждого сегмента тела змейки
	for (let i = 0; i <this.segments.length ; i++) {
		this.segments[i].drawSquare("Blue");
	}
};

Snake.prototype.move = function () { //Snake moving
	let head = this.segments[0];
	let newHead;
	this.direction = this.nextDirection;
	if (this.direction === "right") { // если вправо то
		newHead = new Block(head.col+1, head.row);
	} else if (this.direction === "down") { // if move down
		newHead = new Block(head.col, head.row +1);
	} else if (this.direction === "left") { // if move left
		newHead = new Block(head.col -1, head.row);
	} else if (this.direction === "up") { // if move up
		newHead = new Block(head.col, head.row-1);
	}
	
	if (this.checkCollision(newHead)) { // в случае если сегменты пересекаются завершаем игру
		gameOver();
		return;
	}

	this.segments.unshift(newHead); // добавляем новую голову в начало массива
	if (newHead.equal(apple.position)) { // если голова пересекается с яблоком,
		score ++; // повышаем очки счетчика
		apple.move(); // перемещаем яблоко
	} else {
		this.segments.pop(); // эффект движения анакондоса
	}

};

Snake.prototype.checkCollision = function (head) { // Логика проверки на столкновение со стеной
	let leftCollision = (head.col === 0);
	let toptCollision = (head.row === 0);
	let righttCollision = (head.col === widthInBlock -1);
	let bottomCollision = (head.row === heightInBlock -1);

	let wallCollision = leftCollision || toptCollision || righttCollision || bottomCollision;
	let selfCollision = false;
	for (let i = 0; i <this.segments.length ; i++) {
		if (head.equal(this.segments[i])){
			selfCollision = true;
		}
	}
	return wallCollision || selfCollision;
};

Snake.prototype.setDirection = function (newDirection) { // задаем направление движанеия змеюки 
	if (this.direction === "up" && newDirection === "down"){
		return;
	} else if (this.direction === "right" && newDirection === "left") { // проверка на инверсионное движение
		return;
	} else if (this.direction === "down" && newDirection === "up") {
		return;
	} else if (this.direction === "left" && newDirection === "right") {
		return;
	}
	this.nextDirection = newDirection;
};

let Apple = function () { // Яблоко
	this.position = new Block(10,10);
};

Apple.prototype.draw = function () { // рисуем яблоко
	this.position.drawCircle("LimeGreen");
};

Apple.prototype.move = function () {
	let randomCol = Math.floor( Math.random() * (widthInBlock-2)) +1; // -2 чтобы яблоко на границе холста не нарисовалось
	let randomRow = Math.floor( Math.random() * (heightInBlock-2)) +1;
	this.position = new Block(randomCol, randomRow);
};


let snake = new Snake();
let apple = new Apple();

let intervalId = setInterval(function () {
	ctx.clearRect(0, 0, width, height); // очищаем холст
	drawScore(); // выводим счет
	snake.move(); // начинаем движение змейки
	snake.draw(); // отрисовываем змейку
	apple.draw(); // отрисовываем яблоко
	drawBorder(); // отрисовываем гарницы
},100);

let directions = { // кнопки управления
	37: "left",
	38: "up",
	39: "right",
	40: "down"
};


document.addEventListener("keydown", function (event) {
	let newDirection = directions[event.keyCode];
	if (newDirection !== undefined){
		snake.setDirection(newDirection);
	}
});
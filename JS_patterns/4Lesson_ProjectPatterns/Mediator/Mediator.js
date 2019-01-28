// Mediator - паттерн проектирования обеспечивающий взаимодействие множества объектов, формируя при этом слабую связность
// избавляя объекты от необходимости явно ссылаться друг на друга.

let mediator = {
	players: {},

	setup: function () {
		this.players.player1 = new Player("Player 1");
		this.players.player2 = new Player("Player 2");
	},

	updateMediator: function () {
		let score = {
			Player1: this.players.player1.points,
			Player2: this.players.player2.points,
		};
		scoreboard.update(score);
	},

	keypress: function (e) {
		e = e || window.event;

		if (e.keyCode === 49) {
			mediator.players.player2.updatePlayer();
			return;
		}

		if (e.keyCode === 48) {
			mediator.players.player1.updatePlayer();
			return;
		}
	}
};

let scoreboard = {
	element: null,
	update: function (score) {
		let i,
			msg = "";

		for (i in score) {
			if (score.hasOwnProperty(i)) {
				msg += "<p>" + i + "=" + score[i] + "</p>";
			}
		}
		this.element.innerHTML = msg;
	}
};


function Player(name) {
	this.name = name;
	this.points = 0;
}


Player.prototype.updatePlayer = function () {
	this.points++;
	mediator.updateMediator();
};



mediator.setup();
scoreboard.element = document.getElementById("scoreboard");
window.onkeypress = mediator.keypress();





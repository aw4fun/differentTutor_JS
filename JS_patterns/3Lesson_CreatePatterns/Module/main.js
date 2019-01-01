
let App = {};


	App.util.calc = (function () {
		let x,
				y;

		return {
			add: function () {
				return x + y;
			},

			setX: function (value) {
				x = valuel;
			},

			setY: function (value) {
				y = value;
			},

			getX: function () {
				return x;
			},
			getY: function () {
				return y;
			}
		}

	})();
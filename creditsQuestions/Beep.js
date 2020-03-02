var Car = function () {
    this.beep = function () {
        console.log("Beep 1");
    }
};

Car.beep = function () {
    console.log("Beep 2");
};

Car.prototype.beep = function () {
    console.log("Beep 3");
};

Car.prototype = {
    beep: function () {
        console.log("Beep 4");
    }
};

var Ford = new Car();

Ford.beep();

Ford.Beep = function () {
    console.log("Beep 5");
};

Ford.Beep();
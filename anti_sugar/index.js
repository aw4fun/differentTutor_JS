
const person = {name:'Andrey'};


function myCall(obj, ...args) {
    obj.tmp = this;
    obj.tmp(...args);
    delete obj.tmp;
}

function myBind(obj, ...arg) {
    const self = this;
    if (arg.length) {
        return function (...addition) {
            return self.myCall(obj, ...arg, ...addition);
        };
    } else {
        return function (...arg) {
            return self.myCall(obj, ...arg);
        };
    }
}

function info(...args) {
    console.log(`Name: ${this.name}, Phone: ${args[0]}, Email: ${args[1]}, Test: ${args}`);
}

Function.prototype.myBind = myBind;
Function.prototype.myCall = myCall;

info.myBind(person,'phone', 'mail')();
info.myBind(person, 'phone','mail')('test');
//  ^ is equal v

// const bound = info.myBind(person);
// bound('test', 'test2');

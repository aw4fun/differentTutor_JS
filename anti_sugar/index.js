const person = {name:'Andrey'};

function myCall(obj, ...args) {
    obj.tmp = this;
    obj.tmp(...args);
    delete obj.tmp;
}

function myBind(obj, ...arg) {
    const self = this;
        return function (...addition) {
            return self.myCall(obj, ...arg, ...addition);
        };
}

function info(phone, mail, ...args) {
    console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${mail}, Test: ${args}`);
}

Function.prototype.myBind = myBind;
Function.prototype.myCall = myCall;

info.myBind(person,'phone', 'mail')();
info.myBind(person, 'phone','mail')('test');
//  ^ is equal v

// const bound = info.myBind(person);
// bound('test', 'test2');

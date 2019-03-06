function Employee() {

  this.name = name;

  Employee.prototype = {
    doWork: function () {
      return `${this._name} is working`;
    },
    get name() {
      return this.name.toUpperCase();
    },

    set name(newName) {
      if (newName){
        this.name = newName;
      }
    }
  }
}
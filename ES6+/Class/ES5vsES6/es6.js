class Employee {
  constructor(name) {
    this._name = name;
  }

  doWork() {
    return `${this._name} is working`;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }
}
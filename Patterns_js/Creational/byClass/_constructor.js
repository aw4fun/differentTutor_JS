function Computer(cpu, ssd) {
    this.cpu = cpu;
    this.ssd = ssd;
}

Computer.prototype.mb = 'MSI';

let test = new Computer('Intel', 'Samsung');


console.log(test);
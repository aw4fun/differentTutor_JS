class Server {
    static VERSION = '1.0.3';

    // private Доступен только внутри класса
    // protected Доступен только в дочерних элементах
    // private Доступен только
    // public Доступен только
    name: string;
    ip: number;

    status: string = 'working';

    // constructor(public name: string, protected ip: number) { можно объявлять сразу в конструкторе без объявления в классе.
    constructor(name: string, ip: number) {
        this.name = name;
        this.ip = ip;
    }

    turnOn(): void {
        this.status = 'working';
    }

    turnOff(): void {
        this.status = 'offline';
    }

    getStatus(): string {
        return  this.status;
    }
}

const server: Server = new Server('obs', 1234);

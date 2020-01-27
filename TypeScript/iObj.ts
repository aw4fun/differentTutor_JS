interface iUser {
    name: string,
    age: number,
    logInfo: () => void,
    id?: any; // необязательное поле
}

const user: iUser = {
    name: 'Vasya',
    age: 24,
    logInfo() {
        console.log(this.name + ' ' + this.age);
    },
};

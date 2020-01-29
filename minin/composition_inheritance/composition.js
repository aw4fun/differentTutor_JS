function createProgrammer(name) {
    const programmer = {name};
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode({ name }) {
    return {
        code: () => console.log(`${name} can code!`)
    }
}

function canAngular({name}) {
    return {
        angular: () => console.log(`${name} can Angular`)
    }
}

function canNodejs({name}) {
    return {
        nodejs: () => console.log(`${name} can NodeJS`)
    }
}

function createFrontend(name) {
   const programmer = createProgrammer(name);
   return {
       ...programmer,
       ...canAngular(programmer)
   }
}

function createBackend(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canNodejs(programmer)
    }
}

function createFullstack(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canNodejs(programmer),
        ...canAngular(programmer)
    }
}

const fullstack = createFullstack('Senya');
fullstack.code();
fullstack.angular();
fullstack.nodejs();
console.log(`name is: ${fullstack.name}`);

const frontend = createFrontend('Andrey');
frontend.code();
frontend.angular();

const backend = createBackend('Misha');
backend.code();
backend.nodejs();

const programmer = createProgrammer('Serega');
programmer.code();

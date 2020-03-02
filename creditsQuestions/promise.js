// Что не так с данным фрагментом кода? Напишите 2 варианта решения данной проблемы.

    new Promise((resolve, reject) => { throw new Error('error') }).then(console.log);
const category = cat => {
    let res = '';
    do res += cat.category+'/';
    while(cat = cat.next);
    return res.slice(0, -1);
};

const categories = {
    category: 'Компьютеры',
    next: {
        category: 'Ноутбуки',
        next: {
            category: 'Все ноутбуки',
            next: {
                category: 'Игровые',
                next: null}}}
};

console.log(category(categories));
let tmp = [];
function category(obj) {
    if (obj.next){
        tmp.push(obj.category);
        return category(obj.next)
    } else {
        tmp.push(obj.category)
    }
    return  tmp.join('/');
}

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
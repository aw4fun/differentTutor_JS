function autoReplace(needles, change, haystack) {
    if (!needles || !change || !haystack) return false;
    let tags = '(' + needles.join('|') + ')';
    console.log(tags);
    return haystack.replace( new RegExp(tags, "gi"), change);
}

console.log(autoReplace(['черный','зашел'], 'селедка', 'Черный хлеб зашел шедеврально'));
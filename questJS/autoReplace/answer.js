function autoReplace(needles, change, haystack) {
    if (!needles || !change || !haystack) return false;
    return haystack.replace( new RegExp(needles.join('|'), "gi"), change);
}

console.log(autoReplace(['черный','зашел'], 'селедка', 'Черный хлеб зашел шедеврально'));
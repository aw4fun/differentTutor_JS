function songDecoder(song){
    console.log(song);
    return song.split('WUB').join(' ').trim().replace(/\s+/g, ' ');
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("WUBAWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
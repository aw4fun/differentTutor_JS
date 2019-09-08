function betweenMarkers(text, begin, end) {

    let start = text.indexOf(begin) + 1;
    let finish = text.indexOf(end);
    let answer = text.slice(start, finish);
    if (start > finish) answer = '';

    console.log(answer);
}

betweenMarkers('What is >apple<', '>', '<');
betweenMarkers('What is >apple<', '>', '<');
betweenMarkers('What is [apple]', '[', ']');
betweenMarkers('What is ><', '>', '<');
betweenMarkers('>apple<', '>', '<');
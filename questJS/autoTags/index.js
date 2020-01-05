let btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        let myAnswer = autoTags('интересно изучать js', ['html','js'], "https://mysite.local/tag/");
        console.log('my answer is: ',myAnswer);
    });

function autoTags(str, tags , url) {
    if (str && tags && url) {
        let arrStr = str.split(' ');
        let answerUrl;
        let answerTag;
        arrStr.map((word, idx) => {
            if (tags.includes(word)) {
                answerTag = word.toLowerCase();
                answerUrl = url + word;
            }
        });

        if (answerUrl) {
            return answer = `<a href=${answerUrl} >@${answerTag}</a>`;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


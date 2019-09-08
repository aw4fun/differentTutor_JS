function mostFrequent(data) {
    let container = new Map();
    let answer = {key:null, value: 0};

    function getMax(item) {
        if (container.get(item) > answer.value){
            answer = {key: item, value: container.get(item)}
        }
    }

    data.map( item => {
        if (container.has(item)){
            container.set(item, container.get(item) + 1);
            getMax(item);
        } else {
            container.set(item, 1);
            if (answer.value === 0) {
                answer = {key: item, value: 1};
            }
        }
    });
    return answer.key;
}

mostFrequent(['a', 'a', 'bi', 'bi', 'bi']);
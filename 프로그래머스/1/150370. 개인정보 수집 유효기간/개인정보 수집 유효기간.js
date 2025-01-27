function getDate(str) {
    const arr = str.split('.').map(Number);
    return (arr[0] * 12 + arr[1]) * 28 + arr[2];
}

function solution(today, terms, privacies) {
    let nArr = [];
    let answer = [];
    const todayTime = getDate(today);
    
    const arr = privacies.map((el) => el.split(' '));
    const t = terms.map((el) => el.split(' '));
    
    arr.forEach((el, idx) => {
        const term = t.find((item) => item[0] === el[1])[1];
        nArr.push(getDate(el[0]) + term * 28);
    })
    
    nArr.forEach((el, idx) => {
        if (todayTime >= el) answer.push(idx+1);
    })
    
    return answer;
}
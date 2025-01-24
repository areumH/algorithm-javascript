function getScore(str) {
    const num = parseInt(str.slice(0, -1));
    const bonus = str.slice(-1);
    
    if (bonus === 'T') return Math.pow(num, 3);
    if (bonus === 'D') return Math.pow(num, 2);
    return num;
}

function solution(dartResult) {
    const prize = ['#', '*'];
    const score = ['S', 'D', 'T'];
    
    let arr = [];
    let answer = [];
    
    let start = 0;
    for (let i=0; i<dartResult.length; i++) {
        if (prize.includes(dartResult[i])) {
            arr.push(dartResult.slice(start, i+1));
            start = i + 1;
        } else if (score.includes(dartResult[i]) && (i === dartResult.length-1 || !prize.includes(dartResult[i+1]))) {
            arr.push(dartResult.slice(start, i+1));
            start = i + 1;
        }
    }
    
    for(let i=0; i<arr.length; i++) {
        const str = arr[i];
        if (prize.includes(str[str.length-1])) {
            const nStr = str.slice(0, -1);
            if (str[str.length-1] === '#') {
                arr[i] = getScore(nStr) * (-1);
            } else if (str[str.length-1] === '*') {
                if (i === 0) {
                   arr[i] = getScore(nStr) * 2;
                } else {
                arr[i-1] *= 2;
                arr[i] = getScore(nStr) * 2;
                }
            }
        } else {
            arr[i] = getScore(str);
        }
    }
    
    return arr.reduce((sum, num) => sum + num, 0);
} 
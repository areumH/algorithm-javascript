const input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); [2,6,24]
const numArray = input.slice(1).map(Number);
let answer = [];

const getAnswer = (n) => {
    let result = [];
    let divisor = 2;
    
    while(n >= 2) {
        if (n % divisor === 0){
            result.push(divisor);
            n = n / divisor;
        } else {
            divisor += 1;
        }
    }
    
    const answer = Object.entries(
        result.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
    }, {})).map(([key, value]) => `${key} ${value}`).join('\n');
    
    return answer;
}

numArray.forEach((el) => answer.push(getAnswer(el)));
console.log(answer.join('\n'));
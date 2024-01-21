const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
let k = parseInt(input[1]);
let answer = 0;

while (k !== a) {
    if (k % 2 === 1) {
        k--;
        answer++;
    } else {
        if (k / 2 < a) {
            k--;
            answer++;
        } else {
            k /= 2;
            answer++;
        }
    }
}

console.log(answer);

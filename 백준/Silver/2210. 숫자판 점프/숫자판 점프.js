const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const array = input.map((el) => el.split(' ').map(Number));
const n = 5;
let answer = [];

const dX = [0, 0, -1, 1];
const dY = [-1, 1, 0, 0];

function dfs(startX, startY, number, count) {
    if (count === 6) {
        answer.push(number);
        return;
    }
    for(let i=0; i<4; i++) {
        let nextX = startX + dX[i];
        let nextY = startY + dY[i];
        
        if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
        dfs(nextX, nextY, number * 10 + array[nextX][nextY], count + 1);
    }
}
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        dfs(i, j, array[i][j], 1);
    }
}
console.log(new Set(answer).size);
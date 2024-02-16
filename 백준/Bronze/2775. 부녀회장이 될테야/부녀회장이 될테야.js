const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const t = input.shift();

for(let i=0; i<t; i++) {
    const a = input.shift();
    const b = input.shift();
    let arr = Array(a+1).fill().map(() => Array(b+1).fill(0));

    for(let i=0; i<=b; i++){
        arr[0][i] = i;
    }
    for(let i=1; i<=a; i++) {
        for(let j=1; j<=b; j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    console.log(arr[a][b]);
}
const [n, f] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(n);
const F = parseInt(f);
let x = Math.floor(N / 100) * 100;

if(x % F === 0) {
    console.log("00");
} else {
    while(x % F !== 0) {
        x++;
    }
    if (x % 100 < 10) {
        console.log("0" + x % 100);
    } else {
        console.log(x % 100);
    }
}

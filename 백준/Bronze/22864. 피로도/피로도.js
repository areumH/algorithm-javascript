const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const m = parseInt(input[3]);
let now = 0;
let work = 0;

for(let i=0; i<24; i++) {
    if (a + now <= m) {
        work += b;
        now += a;
    } else {
        now -= c;
        if (now < 0) now = 0;
    }
}
console.log(work);
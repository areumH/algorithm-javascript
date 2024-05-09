const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const a = arr[1].split(' ').map(Number);
const b = arr[2].split(' ').map(Number);
const obj = {};

for(let i=0; i<a.length; i++) {
    obj[a[i]] = 1;
}
for(let i=0; i<b.length; i++) {
    if (obj[b[i]] == 1) delete obj[b[i]];
    else obj[b[i]] = 1;
}

console.log(Object.values(obj).length);
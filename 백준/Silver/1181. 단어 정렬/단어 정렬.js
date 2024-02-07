const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = [...new Set(arr)];

array.sort((a,b) => {
    if (a.length < b.length) return -1;
    else if (a.length === b.length) {
        if (a < b) return -1;
    }
})

console.log(array.join("\n"));

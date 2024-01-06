const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const number = parseInt(n);
const array = arr.map((el) => parseInt(el));

let count = [];
for(let i=0; i<number; i++) {
    count.push(0);
}

array.forEach((el) => {
    if (el !== 0) count[el-1]++;
})

const max = Math.max(...count);
const maxCount = count.filter((el) => el === max).length;
if (maxCount > 1) {
    console.log("skipped");
} else {
    console.log(count.indexOf(max)+1);
}



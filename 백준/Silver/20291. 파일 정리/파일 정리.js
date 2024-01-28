const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((el) => el.split(".")[1]);
let answer = "";

const file = {};

arr.forEach((el) => {
    if (file[el] === undefined) {
        file[el] = 1;
    } else {
        file[el]++;
    }
})

const array = [...new Set(arr)].sort().map((el) => el += ' ' + file[el]);
console.log(array.join('\n'))


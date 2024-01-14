const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let mArr = input.split("-");
let pArr = [];

mArr.forEach((el, i) => {
    if (el.includes("+")) {
        pArr = el.split("+").map(Number);
        mArr[i] = pArr.reduce((acc, cur) => acc + cur, 0);
    }
})
console.log(mArr.map(Number).reduce((acc, cur) => acc - cur));
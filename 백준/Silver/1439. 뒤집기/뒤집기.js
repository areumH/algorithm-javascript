const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const zArr = input.split("1").filter((el) => el !== "");
const oArr = input.split("0").filter((el) => el !== "");

console.log(zArr.length > oArr.length ? oArr.length : zArr.length);
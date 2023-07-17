function getNum(n) {
    let sum = 0;
    const arr = n.toString().split("");
    arr.forEach((i) => sum += parseInt(i));
    
    return sum;
}
function solution(x) {
    return x%getNum(x)==0 ? true : false;
}
function getNum(x,y) {
    return x%y === 0 ? y : getNum(y, x%y);
}
function solution(n, m) {
    return [getNum(m,n), n*m/getNum(m,n)]; 
}
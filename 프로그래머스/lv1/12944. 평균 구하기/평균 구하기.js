function solution(arr) {
    const sum = arr.reduce((sum,n) => sum+n);
    return sum/arr.length;
}
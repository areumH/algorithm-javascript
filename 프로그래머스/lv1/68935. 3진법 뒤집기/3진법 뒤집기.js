function solution(n) {
    let arr = [...n.toString(3)];
    let sum = 0;
    
    for(let i=0; i<arr.length; i++) {
        sum += Number(arr[i]) * 3 ** i
    }
    
    return sum;
}
function solution(num, k) {
    var answer = -1;
    let arr = [...String(num)];
    
    for(let i=0; i<arr.length; i++) {
        if (arr[i] == k) {
            answer = i+1;
            break;
        }
    }
    return answer; 
}
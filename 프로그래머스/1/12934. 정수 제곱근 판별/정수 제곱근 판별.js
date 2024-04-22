function solution(n) {
    const result = Math.sqrt(n);
    const answer = Number.isInteger(result) ? (result+1)**2 : -1;
    
    return answer;
}
function solution(n) {
    let answer = [];
    let index = String(n).split("");
    
    for(let i=0; i<index.length; i++) {
        answer.push(n%10);
        n = Math.floor(n/10);
    }
    return answer;
}
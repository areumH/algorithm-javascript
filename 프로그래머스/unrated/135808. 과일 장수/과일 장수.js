function solution(k, m, score) {
    var answer = 0;
    let c = m-1;
    score = score.sort((a,b) => b-a);
    
    for(let i=0; i<Math.floor(score.length/m); i++) {
        answer += score[c] * m
        c += m;
    }
    
    return answer;
}
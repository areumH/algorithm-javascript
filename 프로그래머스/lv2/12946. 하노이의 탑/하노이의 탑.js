function hanoi(n,a,b,c,answer) {
    if (n==1) {
        answer.push([a,c]);
    } else {
        hanoi(n-1,a,c,b,answer);
        answer.push([a,c]);
        hanoi(n-1,b,a,c,answer);
    }
}
function solution(n) {
    const answer = [];
    hanoi(n,1,2,3,answer);
    return answer;
}
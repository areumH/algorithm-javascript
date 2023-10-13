function solution(n) {
    let arr = String(n).split("");
    let answer = 0;
    
    arr.forEach((el) => {
        answer += parseInt(el);
    })
    return answer;
}
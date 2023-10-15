function solution(s) {
    let arr = [];
    let answer = [];
    
    s.split("").forEach((el) => {
        arr.push(el.charCodeAt());
    })
    arr.sort((a,b) => b-a).forEach((el) => {
        answer.push(String.fromCodePoint(el));
    })
    
    return answer.join("");
}
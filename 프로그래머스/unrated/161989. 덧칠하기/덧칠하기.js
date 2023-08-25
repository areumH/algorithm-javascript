function solution(n, m, section) {
    let answer = 0;
    let index = 0;
    
    section.forEach((i) => {
        if (i > index) {
            answer++;
            index = i+m-1;
        } 
    })
    return answer;
}
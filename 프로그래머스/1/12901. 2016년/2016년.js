function solution(a, b) {
    let date = new Date(2016, a-1, b);
    let answer = date.toString().substring(0,3).toUpperCase();

    return answer;
}
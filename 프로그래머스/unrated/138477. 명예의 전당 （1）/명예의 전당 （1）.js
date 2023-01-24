function solution(k, score) {
    var answer = [];
    let arr = [];
    
    for(let i=0; i<score.length; i++) {
        arr.push(score[i]);
        arr.sort((a,b) => b-a);
        if (arr.length > k) {
            arr.splice(k,1);
        }
        answer.push(arr[arr.length-1]);
    }
    return answer;
}
function solution(array) {
    var answer = [];
    let max = array[0];
    
    for (let i=1; i<array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    
    answer.push(max);
    answer.push(array.indexOf(max));
    
    return answer;
}
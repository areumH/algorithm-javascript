function solution(s) {
    var answer = [];
    let arr = [...s];
    let count;
    
    for(let i=0; i<arr.length; i++) {
        count = 0;
        for(let j=0; j<arr.length; j++) {
            if(arr[j] == arr[i]) {
                count++;
            }
        }
        if (count == 1) {
            answer.push(arr[i]);
        }
    }
    answer.sort();
    answer = answer.join("");
    
    return answer;
}
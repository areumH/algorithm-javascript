function getScore(array, answer) {
    const x = array.length;
    let score = 0;
    
    for(let i=0; i<answer.length; i++) {
        if (answer[i] == array[i%x]) score++;
    }
    return score;
}
function solution(answers) {
    const result = [];
    const answer = [];
    
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    result.push(getScore(arr1, answers));
    result.push(getScore(arr2, answers));
    result.push(getScore(arr3, answers));
 
    const max = Math.max(...result);
    
    result.forEach((el, i) => {
        if (el === max) answer.push(i+1);
    })
    return answer;
}
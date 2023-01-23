function solution(numbers) {
    var answer = [];
    let arr = [];
    
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    for(let i=0; i<arr.length; i++) {
        if (!answer.includes(arr[i])) {
           answer.push(arr[i]); 
        }
    }
    return answer.sort((a,b) => a-b);
}
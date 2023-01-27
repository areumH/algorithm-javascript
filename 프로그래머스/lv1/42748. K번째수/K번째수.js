function solution(array, commands) {
    var answer = [];
    let arr = [];
    
    for(let i=0; i<commands.length; i++) {
        arr.splice(0,arr.length);
        for(let j=commands[i][0]-1; j<commands[i][1]; j++) {
            arr.push(array[j]);
        }
        arr.sort((a,b) => a-b);
        answer.push(arr[commands[i][2]-1]);
    }
    return answer;
}
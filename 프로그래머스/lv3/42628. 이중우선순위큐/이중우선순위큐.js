function solution(operations) {
    var answer = [];
    let arr = [];
    
    for(let i=0; i<operations.length; i++) {
        arr = operations[i].split(" ");
        answer.sort((a,b) => b-a);
        if (arr[0] == "I") {
            answer.push(Number(arr[1]));
        } else if (arr[1] == "1"){
            answer.shift();
        } else {
            answer.pop();
        }
    }
    if (answer.length == 0) {
        return [0,0];
    } else {
        answer.sort((a,b) => b-a);
        return [answer[0], answer[answer.length-1]];
    }
}
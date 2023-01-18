function solution(X, Y) {
    var answer = '';
    let arr = [];
    X = [...X];
    Y = [...Y];
    let sum = 0;
    
    for(let i=0; i<10; i++) {
        let x = X.filter(n => n==i).length;
        let y = Y.filter(n => n==i).length;
        if (x >= y) {
            for(let j=0; j<y; j++) {
                arr.push(i);
            }
        } else {
            for (let j=0; j<x; j++) {
                arr.push(i);
            }
        }
    }
    if (arr.length == 0) {
        answer = "-1";
    } else {
        for(let i=0; i<arr.length; i++) {
            sum += arr[i]
        }
        if (sum == 0) {
            answer = "0";
        } else {
            arr.sort((a,b) => b-a);
            answer = arr.join("");
        }
    }
    return answer;
}
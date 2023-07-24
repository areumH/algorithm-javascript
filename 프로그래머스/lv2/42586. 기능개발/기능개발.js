function getDate(pr,sp) {
    return (100-pr) % sp != 0 ? Math.floor((100-pr)/sp)+1 : (100-pr)/sp;
}

function solution(progresses, speeds) {
    let arr = [];
    let answer = [];
    
    progresses.forEach((el,i) => {
        arr.push(getDate(el,speeds[i]))
    })
    
    let x = arr[0];
    let c = 1;
    
    for(let i=1; i<arr.length; i++) {
        if (x >= arr[i]) {
            c++;
        } else {
            answer.push(c);
            x = arr[i];
            c = 1;
        }
    }
    answer.push(c);
    return answer;
}
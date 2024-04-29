function getAnswer(arr, dis) {
    for(let i=0; i<arr.length; i++) {
        if(dis.includes(arr[i])) {
            dis.splice(dis.indexOf(arr[i]),1)
        }
    }
    return dis.length == 0 ? true : false;
}

function solution(want, number, discount) {
    const count = discount.length - 10;
    let arr = [];
    let answer = 0;
    
    for(let i=0; i<want.length; i++) {
        for(let j=0; j<number[i]; j++) {
            arr.push(want[i]);
        }
    }
    
    for(let i=0; i<=count; i++) {
        let dis = discount.slice(i, i+10);

        if (getAnswer(arr,dis)) answer++;

    }
    
    return answer;
}
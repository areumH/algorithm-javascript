function solution(n) {
    var answer = 0;
    let arr = [...n.toString(2).split("")];
    let x = 0;
    for(let i=0; i<arr.length; i++) {
        if (arr[i] == 1) {
            x++;
        }
    }
    let num = n+1;
    let t = true;
    
    while(t) {
        let newArr = [...num.toString(2).split("")];
        let sum = 0;
        for(let i=0; i<newArr.length; i++) {
            if (newArr[i] == 1) {
                sum++;
            }
        }
        if (sum == x) {
            t = false;
            break;
        }
        num++;
    }
    
    return num;
}
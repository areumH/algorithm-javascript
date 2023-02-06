function solution(arr) {
    arr.sort((a,b) => b-a);
    let t = true;
    let x = 1;
    let count;
    let num;
    
    while(t) {
        count = 0;
        num = arr[0]*x;
        for(let i=0; i<arr.length; i++) {
            if (num%arr[i] == 0) {
                count++;
            }
        }
        if (count == arr.length) {
            t = false;
            break;
        }
        x++;
    }
    return num;
}
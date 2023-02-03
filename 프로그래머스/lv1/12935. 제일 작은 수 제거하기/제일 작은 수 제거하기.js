function solution(arr) {
    let n = arr[0];
    
    if (arr.length == 1) {
        return [-1];
    } else {
        for(let i=1; i<arr.length; i++) {
            if (n > arr[i]) {
                n = arr[i];
            }
        }
    }
    arr.splice(arr.indexOf(n),1);
    return arr;
}
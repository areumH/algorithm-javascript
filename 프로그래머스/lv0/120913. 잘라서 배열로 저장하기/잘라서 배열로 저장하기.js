function solution(my_str, n) {
    var answer = [];
    var array = my_str.split("");
    var arr = [];
    let x = Math.floor(array.length/n);
    
    for(let i=0; i<x; i++) {
        arr = [];
        for (let j=0; j<n; j++) {
            arr.push(array[j]);
        }
        answer.push(arr.join(""));
        array.splice(0,n);
    }
    if (array.length>0) {
        answer.push(array.join(""));
    }
    
    return answer;
}
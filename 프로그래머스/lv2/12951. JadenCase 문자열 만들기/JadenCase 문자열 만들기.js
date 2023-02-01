function solution(s) {
    var answer = '';
    let arr = [...s.split(" ")]
    
    for(let i=0; i<arr.length; i++) {
        let x = arr[i].slice(0,1);
        let y = arr[i].slice(1);
        arr[i] = x.toUpperCase() + y.toLowerCase();
    }
    return arr.join(" ");
}
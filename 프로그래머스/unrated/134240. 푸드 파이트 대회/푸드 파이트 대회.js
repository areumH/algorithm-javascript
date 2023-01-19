function solution(food) {
    var answer = '';
    let arr = [];
    let n = [];
    let c = 1;
    
    for(let i=1; i<food.length; i++) {
        arr.push(Math.floor(food[i]/2));
    }
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i]; j++) {
            n.push(c);
        }
        c++;
    }
    answer = n.join("") + "0" + n.reverse().join("");
    return answer;
}
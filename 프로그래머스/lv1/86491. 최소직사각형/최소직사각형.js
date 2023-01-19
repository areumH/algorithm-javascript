function solution(sizes) {
    var answer = 0;
    let x = [];
    let y = [];
    
    for(let i=0; i<sizes.length; i++) {
        sizes[i].sort((a,b) => a-b);
        x.push(sizes[i][0]);
        y.push(sizes[i][1]);
    }
    answer = Math.max(...x) * Math.max(...y);
    return answer;
}
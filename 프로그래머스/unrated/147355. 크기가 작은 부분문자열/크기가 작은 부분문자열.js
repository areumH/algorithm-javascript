function solution(t, p) {
    var answer = 0;
    let Tarr = [...t];
    
    for(let i=0; i<(Tarr.length-p.length+1); i++) {
        if(parseInt(Tarr.slice(i,i+p.length).join(""))<=parseInt(p)) {
            answer++;
        }
    }
    
    return answer;
}
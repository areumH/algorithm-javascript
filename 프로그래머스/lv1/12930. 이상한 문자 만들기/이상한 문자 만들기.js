function solution(s) {
    let S = [...s.split(" ")];
    let arr = [];
    
    for(let i=0; i<S.length; i++) {
        let x = "";
        for(let j=0; j<S[i].length; j++) {
            if (j%2 == 0) {
                x += S[i][j].toUpperCase();
            } else {
                x += S[i][j].toLowerCase();
            }
        }
        arr.push(x);
    }
    return arr.join(" ");
}
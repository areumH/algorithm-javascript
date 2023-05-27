function solution(clothes) {
    let cArr = [];
    let arr = [];
    
    for(let i=0; i<clothes.length; i++) {
        if (cArr.includes(clothes[i][1])) {
            arr[cArr.indexOf(clothes[i][1])]++;
        } else {
            cArr.push(clothes[i][1]);
            arr.push(1);
        }
    }
    
    console.log(arr)
    
    return arr.map(a => a+1).reduce((a,b) => a*b) - 1;
}
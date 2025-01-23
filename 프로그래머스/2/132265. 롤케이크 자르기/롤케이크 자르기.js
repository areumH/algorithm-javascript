function solution(topping) {
    let answer = 0;
    
    let a = new Set();
    let b = new Set();
    let aCount = [];
    let bCount = [];
    
    for(let i=0; i<topping.length; i++) {
        a.add(topping[i]);
        aCount[i] = a.size;
    }
    
    for(let i=topping.length-1; i>=0; i--) {
        b.add(topping[i]);
        bCount[i] = b.size;
    }
    
    for(let i=0; i<topping.length; i++) {
        if (aCount[i] === bCount[i+1]) answer++;
    }
    
    return answer;
}
function solution(priorities, location) {
    let arr = [];
    let iArr = [];
    
    for(let i=0; i<priorities.length; i++) {
        iArr.push(i);
    }

    while (priorities.length !== 0) {
        let p = priorities.slice(0, 1);
        let rest = priorities.slice(1);
        
        if (p < Math.max(...rest)) {
            priorities.push(p);
            priorities.shift();
            
            let i = iArr.shift();
            iArr.push(i);
        } else {
            priorities.shift();
            
            let i = iArr.shift();
            arr.push(i);
        }
    }
    
    return arr.indexOf(location) + 1;
}
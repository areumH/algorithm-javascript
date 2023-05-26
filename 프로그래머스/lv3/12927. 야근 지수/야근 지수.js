function solution(n, works) {
    if (works.reduce((a,b) => a+b) <= n){
        return 0;
    } else {
        works.sort((a,b) => b-a);
        
        while (n) {
            let maxNum = works[0]; 
            
            for(let i=0; i<works.length; i++) {
                if (works[i] >= maxNum) {
                    works[i]--;
                    n--;
                }
                if (n == 0) break;
            }
        }
        return works.map(el => el**2).reduce((a,b) => a+b);
    }
}
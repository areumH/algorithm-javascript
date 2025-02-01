function solution(n, computers) {
    let count = 0;
    let visited = [];
    
    function dfs(node) {
        visited.push(node);
        
        for(let i=0; i<n; i++) {
            if (!visited.includes(i) && computers[node][i]) {
                dfs(i);
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        if (!visited.includes(i)) {
            dfs(i);
            count++;
        }
    }
    
    return count;
}
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, v] = input.shift().split(' ').map(Number);
let graph = [...Array(n+1)].map(() => []);

for(let i=0; i<m; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

function dfs(graph, start) {
    let answer = [];
    let toVisit = [start];
    
    while(toVisit.length !== 0) {
        const node = toVisit.shift();
        if(!answer.includes(node)) {
            answer.push(node);
            toVisit = [...graph[node].sort((a,b) => a - b), ...toVisit];
        }
    }
    return answer;
}

function bfs(graph, start) {
    let answer = [];
    let toVisit = [start];
    
    while(toVisit.length !== 0) {
        const node = toVisit.shift();
        if(!answer.includes(node)) {
            answer.push(node);
            toVisit = [...toVisit, ...graph[node].sort((a,b) => a-b)];
        }
    }
    return answer;
}

console.log(dfs(graph, v).join(' '));
console.log(bfs(graph, v).join(' '));



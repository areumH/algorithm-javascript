function solution(numbers, target) {
    let answer = 0;
    
    function dfs(sum, index) {
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        dfs(sum + numbers[index], index + 1);
        dfs(sum - numbers[index], index + 1);
    }
    
    dfs(0,0);
    
    return answer;
}
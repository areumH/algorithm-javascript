function isPuddle(x, y, puddles) {
    return puddles.some(([a, b]) => a === x && b === y);
}

function solution(m, n, puddles) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));
  dp[0][0] = 1;
    
  for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
      if (i === 0 && j === 0) continue;
        
      if (puddles.some(([x, y]) => x === j + 1 && y === i + 1)) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = ((i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0)) % 1000000007;
      }
    }
  }

  return dp[n - 1][m - 1];
}
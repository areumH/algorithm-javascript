function solution(info, n, m) {
    let answer = 0;
    const len = info.length;

    const dp = new Array(m).fill(0);
    let maxA = 0;

    for (let i = 0; i < len; i++) {
        maxA += info[i][0];
    }

    for (let i = 0; i < len; i++) {
        const a = info[i][0];
        const b = info[i][1];

        for (let j = m - 1; j >= b; j--) {
            dp[j] = Math.max(dp[j], dp[j - b] + a);
        }
    }

    answer = maxA - dp[m - 1];

    return answer >= n ? -1 : answer;
}
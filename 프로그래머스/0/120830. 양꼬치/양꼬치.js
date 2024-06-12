function solution(n, k) {
    const d = k - Math.floor(n / 10);
    return n * 12000 + d * 2000;
}
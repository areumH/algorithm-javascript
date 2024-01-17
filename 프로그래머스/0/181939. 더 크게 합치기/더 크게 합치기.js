function solution(a, b) {
    const x = parseInt(a.toString() + b.toString());
    const y = parseInt(b.toString() + a.toString());
    return x < y ? y : x;
}
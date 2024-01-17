function solution(num_list) {
    const x = num_list.reduce((acc, cur) => acc * cur);
    const y = num_list.reduce((acc, cur) => acc + cur);

    if (x < y**2) {
        return 1;
    } else {
        return 0;
    }
}
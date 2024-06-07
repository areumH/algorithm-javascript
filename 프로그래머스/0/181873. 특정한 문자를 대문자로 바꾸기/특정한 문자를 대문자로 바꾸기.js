function solution(my_string, alp) {
    if (my_string.includes(alp)) {
        return my_string.split(alp).join(alp.toUpperCase());
    }
    return my_string;
}
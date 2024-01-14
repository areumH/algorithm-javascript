function solution(people, limit) {
    let i = 0;
    let j = people.length-1;
    let answer = 0;
    
    people.sort((a,b) => b-a);
    
    while (i <= j) {
        if (i == j) {
            answer++;
            break;
        }
        if (people[i] + people[j] <= limit) {
            answer++;
            i++;
            j--;
        } else if (people[i] + people[j] > limit) {
            answer++;
            i++;
        } 
    }
    return answer;
}
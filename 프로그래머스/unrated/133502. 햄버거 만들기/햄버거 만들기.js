function solution(ingredient) {
    var answer = 0;
    
    for(let i=0; i<ingredient.length; i++) {
        if (ingredient.slice(i,i+4).join("") == "1231") {
            answer++;
            ingredient.splice(i,4);
            i-=4
        }
    }
    return answer;
}
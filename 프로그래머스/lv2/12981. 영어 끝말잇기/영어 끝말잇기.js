function solution(n, words) {
    let x = 0, y = 0;
    let usedWord = [words[0]];

    for(let i=1; i<words.length; i++) {
        if (words[i][0] !== words[i-1][words[i-1].length-1]) {
            x = i % n + 1
            y = Math.ceil((i+1)/n);
            break;
            
        } else if (usedWord.includes(words[i])) {
            x = i % n + 1
            y = Math.ceil((i+1)/n);
            break;
            
        } else {
            x = 0;
            y = 0;
        }
        usedWord.push(words[i]);
    }

    return [x,y];
}
function getNumber(lottos) {
    let x = 0;
    
    for(let i=0; i<lottos.length; i++) {
        if (lottos[i] === 0) x++;
    }
    return x;
}

function getRanking(n) {
    if (n === 6) {
        return 1;
    } else if (n === 5) {
        return 2;
    } else if (n === 4) {
        return 3;
    } else if (n === 3) {
        return 4;
    } else if (n === 2) {
        return 5;
    } else {
        return 6;
    }
}

function solution(lottos, win_nums) {
    let match = 0;
    const unCorrectNum = getNumber(lottos);
    
    for (let i=0; i<lottos.length; i++) {
        if (win_nums.includes(lottos[i])) {
            match++;
        }
    }
    
    return [getRanking(match + unCorrectNum), getRanking(match)];
}
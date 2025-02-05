function getGenresCount(genres, plays) {
    const genresCount = {};
    
    genres.forEach((el, idx) => {
        genresCount[el] = (genresCount[el] || 0) + plays[idx][0];
    });
    
    return Object.entries(genresCount).sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}

function solution(genres, plays) {
    let answer = [];
    
    const indexPlays = plays.map((el, idx) => [el, idx]);
    const sortGenres = getGenresCount(genres, indexPlays); // [pop, classic]
    
    const genresIndex = sortGenres.map((el) => {
        return genres.map((genre, idx) => (el === genre ? idx : -1)).filter(idx => idx !== -1);
    })
    
    for(let i=0; i<genresIndex.length; i++) {
        const selected = genresIndex[i].map(idx => indexPlays[idx]);
        answer.push(selected.sort((a,b) => b[0] - a[0]).slice(0, 2).map((el) => el[1]));
    }
    
    return answer.flat();
}
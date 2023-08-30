function solution(park, routes) {
    let index = [];
    for(let i=0; i<park.length; i++) {
        if (park[i].includes('S')) {
            index.push(i,park[i].indexOf('S'));
            break;
        }
    }
    
    const Size = [park[0].length-1, park.length-1];
    const Route = routes.map((el) => {
        return [el[0], Number(el[2])]
    });
    
    Route.forEach((el) => {
        if (el[0] == "E") {
            let count = 0;
            if (index[1]+el[1] <= Size[0]) {
                for(let i=0; i<el[1]; i++) {
                    index[1]++;
                    count++;
                    if (park[index[0]][index[1]] == 'X') {
                        index[1] -= count;
                        break;
                    }
                }
            }
        }
        else if (el[0] == "W") {
            let count = 0;
            if (index[1]-el[1] >= 0) {
                for(let i=0; i<el[1]; i++) {
                    index[1]--;
                    count++;
                    if (park[index[0]][index[1]] == 'X') {
                        index[1] += count;
                        break;
                    }
                }
            }
        }
        else if (el[0] == "N") {
            let count = 0;
            if (index[0]-el[1] >= 0) {
                for(let i=0; i<el[1]; i++) {
                    index[0]--;
                    count++;
                    if (park[index[0]][index[1]] == 'X') {
                        index[0] += count;
                        break;
                    }
                }
            }
        }
        else if (el[0] == "S") {
            let count = 0;
            if (index[0]+el[1] <= Size[1]) {
                for(let i=0; i<el[1]; i++) {
                    index[0]++;
                    count++;
                    if (park[index[0]][index[1]] == 'X') {
                        index[0] -= count;
                        break;
                    }
                }
            }
        }
    })
    
    return index;
}
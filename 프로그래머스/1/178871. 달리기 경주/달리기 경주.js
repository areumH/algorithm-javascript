function solution(players, callings) {
    const playerList = {};
    players.forEach((player, index) => {
        playerList[player] = index;
    })
    
    for(let i=0; i<callings.length; i++) {
        let x = playerList[callings[i]];
        let p = players[x-1];
        
        players[x-1] = players[x];
        players[x] = p;
        
        playerList[players[x-1]] = x-1;
        playerList[players[x]] = x;
    }
    return players;
}
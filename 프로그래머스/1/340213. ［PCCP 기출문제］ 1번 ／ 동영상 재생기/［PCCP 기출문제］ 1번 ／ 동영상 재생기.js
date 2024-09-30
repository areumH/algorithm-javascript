function getSecond(string) {
    const arr = string.split(":").map(Number);
    return arr[0] * 60 + arr[1];
}

function getFormattedTime(number) {
    return String(number).padStart(2, '0');
}

function getTime(number) {
    const min = getFormattedTime(Math.floor(number / 60));
    const sec = getFormattedTime(number % 60);

    return [min, sec].join(":");
}

function solution(video_len, pos, op_start, op_end, commands) {
    const len = getSecond(video_len);
    const start = getSecond(op_start);
    const end = getSecond(op_end);
    
    let now = getSecond(pos);
    if (now <= end && now >= start) now = end;
    
    commands.map((command) => {
        if (command === 'prev') {
            now - 10 < 0 ? now = 0 : now -= 10;
        } else if (command === 'next') {
            now + 10 > len ? now = len : now += 10;
        } 
        
        if (now <= end && now >= start) now = end;
    })
    
    return getTime(now);
}
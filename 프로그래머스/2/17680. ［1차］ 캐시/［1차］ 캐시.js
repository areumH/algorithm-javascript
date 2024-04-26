function solution(cacheSize, cities) {
    const arr = cities.map((str) => {
        return str.toLowerCase();
    });                       
    let cache = [];
    let time = 0;
    
    if (cacheSize == 0) return cities.length * 5;
    
    for(let i=0; i<arr.length; i++) {
        if (!cache.includes(arr[i])) {
            if (cache.length == cacheSize) cache.shift();
            cache.push(arr[i]);
            time += 5;
        } else {
            cache.splice(cache.indexOf(arr[i]),1);
            cache.push(arr[i]);
            time += 1;
        }
    }
    return time;
}
function solution(phone_book) {
    let answer = true;
    let book = phone_book.sort();
    
    for(let i=1; i<book.length; i++) {
        let len = book[i-1].length;
        
        if (book[i].substring(0, len) === book[i-1]) {
            answer = false;
            break;
        }
    }
    return answer;
}
function solution(s, n) {
    let arr = s.split("");
    
    const answer = arr.map((el) => 
       el !== " " ? el.toUpperCase().charCodeAt()+n > 90 ? String.fromCharCode(el.charCodeAt()+n-26) : String.fromCharCode(el.charCodeAt()+n) : " "
    )
    
    return answer.join("");
}
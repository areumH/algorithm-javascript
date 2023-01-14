function solution(numbers) {
    var answer = 0;
    const arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    const num = ["0","1","2","3","4","5","6","7","8","9"]
    
    for(let i=0; i<50; i++) {
        for (let j=0; j<10; j++) {
            if (numbers.includes(arr[j])) {
                numbers = numbers.replace(arr[j],num[j]);
            }
        }
    }
    answer = parseInt(numbers);
    return answer;
}
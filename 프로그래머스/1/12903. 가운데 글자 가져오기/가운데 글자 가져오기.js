function solution(s) {
    const length = s.length; 
    const mid = Math.floor(length / 2); 

    if (length % 2 === 0) {
        return s[mid - 1] + s[mid]; 
    } else {
        return s[mid];
    }
}
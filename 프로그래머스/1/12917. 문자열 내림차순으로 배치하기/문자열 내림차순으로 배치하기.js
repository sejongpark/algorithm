function solution(s) {
    let answer = '';
    let lowercase = (s.replace(/[A-Z]/g, '').split('')).sort().reverse().join('');
    let uppercase = (s.replace(/[a-z]/g, '').split('')).sort().reverse().join('');
    return answer = lowercase + uppercase;
}
function solution(s, n) {
    let result = '';

    for (let char of s) {
        if (char === ' ') {
            result += char;
        } else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(((char.charCodeAt() - 65 + n) % 26) + 65);
        } else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt() - 97 + n) % 26) + 97);
        }
    }

    return result;
}

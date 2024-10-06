function solution(array) {
    array.sort((a, b) => a - b);
        const n = array.length;
        const medianIndex = Math.floor(n / 2);
        return array[medianIndex];
}

const array = [1, 2, 7, 10, 11];
console.log(solution(array)); 

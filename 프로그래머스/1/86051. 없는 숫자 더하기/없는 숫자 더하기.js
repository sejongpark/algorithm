function solution(numbers) {
    let missingNumbers = [];

    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            missingNumbers.push(i);
        }
    }

    let sum = missingNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
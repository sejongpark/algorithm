function solution(number, limit, power) {
    const divisors = Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisors[j]++;
        }
    }

    return divisors.reduce((totalWeight, divisorCount) => {
        if (divisorCount > limit) {
            return totalWeight + power; 
        }
        return totalWeight + divisorCount; 
    }, 0);
}
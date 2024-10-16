function solution(n, m) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    
    // 최대공약수
    const greatestCommonDivisor = gcd(n, m);
    // 최소공배수
    const leastCommonMultiple = (n * m) / greatestCommonDivisor;
    
    return [greatestCommonDivisor, leastCommonMultiple];
}
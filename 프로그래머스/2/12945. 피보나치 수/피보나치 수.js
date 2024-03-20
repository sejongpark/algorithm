function solution(n) {
    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i <= n; i++) {
        result = (a + b) % 1234567;
        a = b;
        b = result;
    }

    return result;
}
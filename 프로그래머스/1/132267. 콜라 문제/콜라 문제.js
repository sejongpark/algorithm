function solution(a, b, n) {
    let totalCokes = 0; 
    
    while (n >= a) {
        let newCokes = Math.floor(n / a) * b;
        
        totalCokes += newCokes;
        
        n = newCokes + (n % a);
    }
    
    return totalCokes;
}
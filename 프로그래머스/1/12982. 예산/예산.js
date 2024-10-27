function solution(d, budget) {
    d.sort((a, b) => a - b);  
    let count = 0;

    for (let amount of d) {
        if (budget >= amount) {
            budget -= amount; 
            count++;  
        } else {
            break;  
        }
    }
    
    return count;
}

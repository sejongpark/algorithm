function solution(k, m, score) {
    score.sort((a, b) => b - a);
    
    let maxProfit = 0;

    for (let i = 0; i < Math.floor(score.length / m); i++) {
        const box = score.slice(i * m, (i + 1) * m);
        const lowestScore = box[m - 1];
        
        maxProfit += lowestScore * m;
    }

    return maxProfit;
}
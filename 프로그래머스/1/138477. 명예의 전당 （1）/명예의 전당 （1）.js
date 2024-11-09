function solution(k, score) {
    let hall_of_fame = []; 
    let result = [];       

    for (let i = 0; i < score.length; i++) {
        hall_of_fame.push(score[i]);
        
        hall_of_fame.sort((a, b) => b - a);
        if (hall_of_fame.length > k) {
            hall_of_fame.pop();
        }
        
        result.push(hall_of_fame[hall_of_fame.length - 1]);
    }
    
    return result;
}
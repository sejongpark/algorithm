function solution(answers) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [0, 0, 0];
    
    answers.forEach((answer, index) => {
        if (answer === person1[index % person1.length]) scores[0]++;
        if (answer === person2[index % person2.length]) scores[1]++;
        if (answer === person3[index % person3.length]) scores[2]++;
    });

    const maxScore = Math.max(...scores);
    return scores
        .map((score, index) => (score === maxScore ? index + 1 : null))
        .filter(person => person !== null); 
}
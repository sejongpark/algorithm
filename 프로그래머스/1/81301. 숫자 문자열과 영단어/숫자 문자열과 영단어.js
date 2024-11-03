function solution(s) {
    const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numberWords.forEach((word, index) => {
        const regex = new RegExp(word, "g"); 
        s = s.replace(regex, index); 
    });

    return Number(s); 
}
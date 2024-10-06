function solution(arr) {
    const minValue = Math.min(...arr); 
    const result = arr.filter(num => num !== minValue); 

    return result.length === 0 ? [-1] : result;
}
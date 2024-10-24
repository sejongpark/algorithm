function solution(arr) {
    let result = [];
    
    let previous = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== previous) {
            result.push(arr[i]);
            previous = arr[i]; 
        }
    }

    return result; 
}
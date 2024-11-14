function solution(nums) {
    const uniqueTypes = new Set(nums).size;
    
    const maxSelectable = nums.length / 2;
    
    return Math.min(uniqueTypes, maxSelectable);
}

function solution(t, p) {
    const lenP = p.length;
    let count = 0;
    const intP = parseInt(p, 10); 
    
    for (let i = 0; i <= t.length - lenP; i++) {
        const subNumber = parseInt(t.slice(i, i + lenP), 10);
        
        if (subNumber <= intP) {
            count++;
        }
    }
    
    return count;
}

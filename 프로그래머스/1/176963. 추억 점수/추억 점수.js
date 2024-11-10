function solution(name, yearning, photo) {
    const yearningMap = {};
    name.forEach((n, i) => {
        yearningMap[n] = yearning[i];
    });

    const result = photo.map(persons => {
        return persons.reduce((sum, person) => {
            return sum + (yearningMap[person] || 0);
        }, 0);
    });

    return result;
}

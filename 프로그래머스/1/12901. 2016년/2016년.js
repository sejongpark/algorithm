function solution(a, b) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const totalDays = daysInMonth.slice(0, a - 1).reduce((sum, days) => sum + days, 0) + b;

    return daysOfWeek[(totalDays - 1 + 5) % 7];
}
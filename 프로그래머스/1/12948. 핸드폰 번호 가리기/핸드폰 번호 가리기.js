function solution(phone_number) {
    const length = phone_number.length;
    const number = phone_number.slice(length - 4);
    return '*'.repeat(length - 4) + number;
}
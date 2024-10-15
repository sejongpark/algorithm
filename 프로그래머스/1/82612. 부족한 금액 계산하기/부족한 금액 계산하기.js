function solution(price, money, count) {
    let total_cost = price * (count * (count + 1)) / 2;
        return total_cost > money ? total_cost - money : 0;
}
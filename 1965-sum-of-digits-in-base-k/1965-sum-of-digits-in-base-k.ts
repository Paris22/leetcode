const sumBase = (n: number, k: number): number => {
    let sum: number = 0

    while (n !== 0) {
        sum += n % k
        n = Math.floor(n/k)
    }

    return sum
};
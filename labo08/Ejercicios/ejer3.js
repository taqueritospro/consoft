function factorial(n) {
    if (n < 0) return undefined;
    return n === 0 ? 1 : n * factorial(n - 1);
}

const numero = 5;
console.log(`El factorial de ${numero} es:`, factorial(numero));
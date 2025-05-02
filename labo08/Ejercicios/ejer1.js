function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    let suma = arr.reduce((a, b) => a + b, 0);
    return suma / arr.length;
}

const numeros = [10, 20, 30, 40, 50];
console.log("Promedio:", calcularPromedio(numeros));
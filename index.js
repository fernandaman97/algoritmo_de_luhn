function validarTarjeta(numeroTarjeta) {
    // Paso 1: Convertir el número de tarjeta a un array de dígitos
    let digitos = numeroTarjeta.toString().split('').map(Number);

    // Paso 2: Invertir el array de dígitos
    digitos.reverse();

    // Paso 3: Aplicar el algoritmo de Luhn
    // Inicializamos la suma en 0 para almacenar la suma de los dígitos

    let suma = 0;
    for (let i = 0; i < digitos.length; i++) {
        let digito = digitos[i];

        // Paso 4: Multiplicar por 2 los dígitos en las posiciones impares. La condicion verifica si el indice o la posición del número es par o impar, si es impar, lo multiplicará por 2
        if (i % 2 !== 0) {
            digito *= 2;

            // Paso 5: Restar 9 si el resultado es mayor o igual a 10
            if (digito >= 10) {
                digito -= 9;
            }
        }

        // Paso 6: Sumar todos los dígitos
        suma += digito;
    }

    // Paso 7: Verificar si la suma total es divisible por 10
    return suma % 10 === 0;
}

// Ejemplo de uso:
let numeroTarjeta = "4556737586899855"; // Ejemplo de número de tarjeta
let esValida = validarTarjeta(numeroTarjeta);

if (esValida) {
    console.log(`El número de tarjeta ${numeroTarjeta} es válido según el algoritmo de Luhn.`);
} else {
    console.log(`El número de tarjeta ${numeroTarjeta} NO es válido según el algoritmo de Luhn.`);
}
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

         // importante!!! el orden de los números inicia en el indice 0, es decir agregamos un 0 invisible al inicio
        suma += digito;
    }

    // Paso 7: Verificar si la suma total es divisible por 10
    return suma % 10 === 0;
}

// Ejemplo de uso:
let numeroTarjeta = "4556737586899855"; // Ejemplo de número de tarjeta
let esValida = validarTarjeta(numeroTarjeta);


//la suma sería: 4 10 5 12 7 6 7 10 8 12 8 18 9 16 5 10
//aplicando del algoritmo de luhn el array quedaría:
// 4+1+5+3+7+6+7+1+8+3+8+9+9+7+5+1 =84 No es modulo 10 pero el algoritmo da como resultado que es una tarjeta válida

//duplicandolos sin tener en cuenta el 0 al inicio para los indices
//2 5 10 6 14 3 14 5 16 6 16 9 18 8 10 5
//2+5+1+6+5+3+5+5+7+6+7+9+9+8+1+5=84 igual.

if (esValida) {
    console.log(`El número de tarjeta ${numeroTarjeta} es válido según el algoritmo de Luhn.`);
} else {
    console.log(`El número de tarjeta ${numeroTarjeta} NO es válido según el algoritmo de Luhn.`);
}
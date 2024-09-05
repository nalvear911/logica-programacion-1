// Función para solicitar números y procesarlos
function iniciar() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Introduce el primer número: ", (num1) => {
        readline.question("Introduce el segundo número: ", (num2) => {
            readline.question("Introduce el tercer número: ", (num3) => {
                // Convertir a números
                num1 = Number(num1);
                num2 = Number(num2);
                num3 = Number(num3);

                // Validar
                if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                    console.error("Por favor, introduce solo números válidos.");
                } else {
                    // Identificar mayor, medio y menor
                    let numeros = [num1, num2, num3];
                    let mayor = Math.max(num1, num2, num3);
                    let menor = Math.min(num1, num2, num3);
                    let medio = numeros.reduce((a, b) => a + b) - mayor - menor;

                    // Verificar si son iguales
                    if (num1 === num2 && num2 === num3) {
                        console.log("Todos los números son iguales.");
                    } else {
                        // Ordenar números
                        let ordenAscendente = [...numeros].sort((a, b) => a - b);
                        let ordenDescendente = [...numeros].sort((a, b) => b - a);

                        // Mostrar resultados
                        console.log("Ordenados de mayor a menor:", ordenDescendente);
                        console.log("Ordenados de menor a mayor:", ordenAscendente);
                    }
                }
                readline.close();
            });
        });
    });
}

// Iniciar la función
iniciar();

// repaso de for

// Crea una función llamada sumArray que reciba un arreglo de números como argumento y retorne la suma de todos sus elementos. Usa un bucle for para iterar a través del arreglo y sumar cada elemento

// const sumArray = (array) => {
//     let suma = 0
//     for (let i = 0; i < array.length; i++) {
//         suma += array[i]
//     }
//     console.log(suma)
// }

// sumArray([1, 2, 3, 4, 5]) //15

// ejercicio 2:
// Escribe una función llamada union que reciba un arreglo de string y devuelva un solo string que sea la concatenación de todas los string del arreglo.

// const union = (array) => {
//     let suma = ""
//     for (let i = 0; i < array.length; i++) {
//         suma += array[i]
//     }
//     console.log(suma)
// }
// union(["Hola", " ", "Mundo", "!"]); // "Hola Mundo!"


// Ejercicio 3: Filtrar números pares
// Crea una función llamada filtro que reciba un arreglo de números y retorne un nuevo arreglo que contenga solo los números pares del arreglo original.


// const filtro = (array) => {
//     let filtrado = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0){
//             filtrado.push(array[i])   //push lo vemos la semana que viene
//         }
        
//     }
//     return filtrado
// }

// console.log(filtro([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// ----------------------------------------------------------

//FOR IN
// let persona = {
//     nombre: "Juan",
//     edad: 30,
//     ciudad: "Madrid"
// }; 

// console.log(persona.nombre)
// console.log(persona["nombre"])


// for (const key in persona) {
//     console.log(`${key}: ${persona[key]}`)
// }

// let auto = {
//     marca: "Renault",
//     modelo: "Clio",
//     año: 2007
// }; 


// for (const key in auto) {
//     console.log(key + ": "+ auto[key])
// }

// console.log(auto["año"])
// console.log("marca: Renault")


// Ejercicio 1: Concatenación de valores de un objeto
// Ahora tenemos un objeto donde las propiedades son claves y los valores son string. Queremos concatenar todos los valores del objeto en una solo string



// const union = (objeto) => {

//     let suma = ""
//     for (const key in objeto) {
//         suma += objeto[key]
//     }
//     return suma
// }

// let saludo = {
//     primero: "Hola", 
//     segundo: " ", 
//     tercero: "mundo", 
//     cuarto: "!"
// }

// console.log(union(saludo)); // "Hola mundo!"


// ----------------------------------------------------------

//FOR OF

// const sumaArray = (arrayNumeros) => {
//     let suma = 0
//     for (const element of arrayNumeros) {
//         suma += element
//     }
//     console.log(suma)

// }

// sumaArray([1, 2, 3, 4, 5]) //15


// const union = (array) => {
//     let suma = ""
//     for (const element of array){
//         suma += element
//     }
//     console.log(suma)
// }


// union(["Hola", " ", "Mundo", "!"]); // "Hola Mundo!"

// Diferencias entre for, for...in, y for...of:

// for: Es un bucle general que puede ser usado para iterar un número específico de veces o para recorrer arreglos u otros objetos utilizando índices.

// for...in: Itera sobre las claves (propiedades) de un objeto.

// for...of: Itera sobre los valores de un objeto iterable, ignorando las claves o índices.

// ----------------------------------------------

// switch (expresion){
//     case valorUno:
//         console.log("si coincide con el valor uno")
//         break;
//     case valorDos:
//         console.log("si coincide con el valor Dos")
//         break;
//         //si tengo mas csos los póngo aca 
//         default:
//             console.log("si no coincide ninguno")
// }

// let dia = prompt("decime que dia es y te dire el menú")

// switch (dia) {
//     case "Lunes":
//         alert('El plato del día es: Ensalada César.');
//         break;
//     case "Martes":
//         alert('El plato del día es: Tacos de carne.');
//         break;
//     case 'Miércoles':
//         alert('El plato del día es: Sopa de lentejas.');
//         break;
//     case 'Jueves':
//         alert('El plato del día es: Pizza Margarita.');
//         break;
//     case 'Viernes':
//         alert('El plato del día es: Hamburguesa con papas.');
//         break;
//     case 'Sábado':
//         alert('El plato del día es: Paella.');
//         break;
//     case 'Domingo':
//         alert('El plato del día es: Pollo asado.');
//         break;
//     default:
//         alert('Día no válido.');
// }


// //es lo mismo que hacerlo con el if
// if (dia === 'Lunes') {
//     console.log('El plato del día es: Ensalada César.');
// } else if (dia === 'Martes') {
//     console.log('El plato del día es: Tacos de carne.');
// } else if (dia === 'Miércoles') {
//     console.log('El plato del día es: Sopa de lentejas.');
// } else if (dia === 'Jueves') {
//     console.log('El plato del día es: Pizza Margarita.');
// } else if (dia === 'Viernes') {
//     console.log('El plato del día es: Hamburguesa con papas.');
// } else if (dia === 'Sábado') {
//     console.log('El plato del día es: Paella.');
// } else if (dia === 'Domingo') {
//     console.log('El plato del día es: Pollo asado.');
// } else {
//     console.log('Día no válido.');
// }



//-----------------------------------------------
// do while
//Quiero hacer un juego donde tengas que adivinar un numero 


// const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Lo único que quiero que sepan que esto arroja un numero del 1 al 10 de manera random
// let adivinanza
// do {
//     adivinanza = parseInt(prompt("adivina el numero del 1 al 10"));
//     if (adivinanza === numeroSecreto) {
//         console.log("Ganaste")
//     } else {
//         console.log("Intentalo de nuevo")
//     }

// } while (adivinanza!== numeroSecreto)

// do: Es el bloque de código que se ejecuta primero.

// while: Contiene la condición que se evalúa después de ejecutar el bloque de código. Si la condición es verdadera, el bucle se repite; si es falsa, el bucle se detiene.



// Consigna:
// Crea un programa que solicite al usuario que ingrese un número. El programa debe seguir solicitando un número mientras el número ingresado sea menor que 100. Utiliza un bucle do...while para lograr esto. Una vez que el usuario ingrese un número mayor o igual a 100, muestra un mensaje que indique "Número aceptado".

// let numero
// do {
//     numero = parseInt(prompt("ingrese un número"))
// } while (numero < 100) 
//     console.log("numero aceptado")



    // Consigna:
// Crea un programa que permita al usuario ingresar palabras. El programa debe seguir pidiendo palabras hasta que el usuario ingrese una palabra que tenga más de 10 caracteres. Una vez que eso ocurra, muestra un mensaje que diga "¡Palabra muy larga encontrada!".


// let palabra
// do {
//     palabra = prompt("ingrese una palabra");
// } while (palabra.length <= 10) 
//     console.log("¡Palabra muy larga encontrada!")

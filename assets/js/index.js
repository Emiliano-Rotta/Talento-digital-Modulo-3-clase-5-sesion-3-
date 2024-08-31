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

const sumaArray = (arrayNumeros) => {
    let suma = 0
    for (const element of arrayNumeros) {
        suma += element
    }
    console.log(suma)

}

sumaArray([1, 2, 3, 4, 5]) //15

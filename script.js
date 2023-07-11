//crea un array vacio,  y agraga 10 numeros al azar
let numerosAzar = new Array()
for (let i = 0; i < 10; i++) {
  numerosAzar[i] = Math.floor(Math.random() * 10);
}
console.log(numerosAzar)
//El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let palabras = prompt("ingresa varias palabras separadas por comas")
let arrayPalabras = palabras.split(",")
console.log(palabras)
console.log(arrayPalabras)
//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let maximoMinimo = [10, 40, 30, 20, 15, 5]
console.log(maximoMinimo.sort(function (a, b) {
  return a - b
}))
console.log(Math.min(...maximoMinimo))
console.log(Math.max(...maximoMinimo))

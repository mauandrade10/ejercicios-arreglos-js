// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let array = [];

for (let i = 0; i < 10; i++){
    //Genera números al azar del 0 al 100
    array.push(Math.floor(Math.random() * 100));
}
console.log(array);
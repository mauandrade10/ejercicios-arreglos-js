//De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const array = [10,40,30,20,15,5];

const smallestToLargest =  array.sort(function(a,b){
    return a-b;
});

console.log(smallestToLargest);
console.log(array.reverse());
console.log(`Èl numero menor del array es: ${Math.min(...array)}`);
console.log(`Èl numero mayor del array es: ${Math.max(...array)}`)

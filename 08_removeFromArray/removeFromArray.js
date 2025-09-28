const removeFromArray = function(arr, ...value) {
    for (let i = 0; i < value.length; i++) {
        while (arr.includes(value[i])) {
            arr.splice(arr.indexOf(value[i]), 1)
        }
    }
    return arr;
};

/**
 * 1. usar ... para poder usar varios parametros
 * 2. ... entrega una lista con los valores a eliminar
 * 3. usamos el elemento con index 0 de la lista
 * 4. buscamos el index del elemento 0 de value en la lista principal
 */

// Do not edit below this line
module.exports = removeFromArray;

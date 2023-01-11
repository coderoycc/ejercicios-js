/*
Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.
*/
function dia8(cadena){
    let vector = cadena.split('')
    let limite = cadena.length
    if(cadena == vector.reverse().join('')){
        return true
    }else{
        for(let i = 0; i < limite; i++){
            let subvec = vector.slice(0,i).concat(...vector.slice(i+1,limite));
            if (subvec.join('')==subvec.reverse().join('')){
                return true
            }
        }
    }
    return false
}
console.log(dia8('oruro'))
console.log(dia8('uwu'))
console.log(dia8('miidim'))
console.log(dia8('midu'))

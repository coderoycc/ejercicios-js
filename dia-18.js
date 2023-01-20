/* 
Estamos imprimiendo los códigos de barra para los envíos en la fábrica de Papá Noel. Usamos un sistema de estampación de números donde cada dígito se imprime con una tinta diferente. Es un sistema antiguo pero fiable. Sin embargo, a veces nos quedamos sin tinta de un dígito.

Escribe una función que recibe el dígito del que no tenemos tinta (un número que será del 0 al 9) y como segundo parámetro, el número de códigos de barras que hay que imprimir (empezamos desde 1 hasta este número que recibimos).

Nos debe devolver un array con los números que incluyen el número que no tenemos tinta. Veamos un ejemplo:

dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15
*/
function dryNumber(dry, numbers) {
    let res = []
    for(let i = 1; i <=numbers; i++){
      if((i+'').indexOf(dry+'') != -1){
        res.push(i)
      }
    }
    return res
}
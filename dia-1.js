// DIA 1
/*
Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados.
*/

function wrapping(gifts) {
  let envueltos = [];
  gifts.forEach( x => {
    let lon = x.length + 2;
    envueltos.push(`${"*".repeat(lon)}\n*${x}*\n${"*".repeat(lon)}`);
  });
  return envueltos
}
  

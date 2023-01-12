/*
Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea.
getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
*/
function dia11(hecho, total){
    let hh = 0
    let ht = 0
    let vh = hecho.split(':')
    let vt = total.split(':')
    hh = parseInt(vh[0])*3600 + parseInt(vh[1])*60 + parseInt(vh[2])
    ht = parseInt(vt[0])*3600 + parseInt(vt[1])*60 + parseInt(vt[2])
    let vec = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,421]
    let i = 0
    let sw = true
    while(i < vec.length && sw){
        if(hh % vec[i]==0 && ht % vec[i]==0){
            hh = hh/vec[i]
            ht = ht/vec[i]
        }else if(hh==1 || ht == 1){
            sw = false
        }else if(ht % hh == 0){
            ht = ht / hh
            hh = 1
            sw = false
        }else{
            i = i + 1
        }
    }
    console.log(`${hh}/${ht}`)
}
dia11('03:30:30', '05:50:50')
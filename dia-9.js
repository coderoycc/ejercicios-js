/*
Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

Cada 7 segundos, los leds cambian de estado de esta forma:

Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
Si el led está encendido, se mantiene siempre encendido.
Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero
*/
function dia9(leds){ 
  let cont = 0
  let vecAnt = []
  let sw = true
  let p = leds.filter( x => x==1)
  if(p.length == leds.length){
    return 0
  }
  while(sw){
    vecAnt = [...leds]
    for(let i = 0; i < leds.length; i++){
        let ledAnt = (i == 0) ? vecAnt[leds.length-1] : vecAnt[i-1]
        if(leds[i] == 0 && ledAnt == 1){
            vecAnt = [...leds]
            leds[i] = 1
        }
        console.log(leds)
    }
    cont++
    p = leds.filter( x => x==1)
    if(leds.length == p.length){
      sw = false
    }
  }
  console.log(cont*7)
}
dia9([1,1,1,1])
dia9([0, 1, 1, 0, 1])
dia9([0,0,0,1])

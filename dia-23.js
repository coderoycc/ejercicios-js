/* 
La CPU tiene 8 registros disponibles, que se llaman V00..V07. Al comienzo del programa, todos los registros contienen 0. La CPU admite las siguientes instrucciones:

MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
ADD Vxx,Vyy: calcula (Vxx + Vyy) y almacena el resultado en Vxx;
DEC Vxx: decrementa el valor de Vxx en 1.
INC Vxx: incrementa el valor de Vxx en 1.
JMP i: salta a la instrucción número i si V00 es diferente de 0. i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.
Como la CPU es de 8 bits, el número que podría representar va desde 0 hasta 255. Si incrementas el número 255 causa un desbordamiento y resulta en 0. Y si decrementas 0, resulta en 255. Ten en cuenta, entonces, que el número 280 sería 24 en la CPU.

Después de que se haya ejecutado la última instrucción, debes devolver una matriz con el resultado para cada registro. De V00 a V07. Ejemplos:

executeCommands([
  'MOV 5,V00',  // V00 es 5
  'MOV 10,V01', // V01 es 10
  'DEC V00',    // V00 ahora es 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
])

// Output: [14, 10, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 255,V00', // V00 es 255
  'INC V00',     // V00 es 256, desborda a 0
  'DEC V01',     // V01 es -1, desborda a 255
  'DEC V01'      // V01 es 254
])

// Output: [0, 254, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 10,V00', // V00 es 10
  'DEC V00',    // decrementa V00 en 1  <---┐
  'INC V01',    // incrementa V01 en 1      |
  'JMP 1',      // bucle hasta que V00 sea 0 ----┘
  'INC V06'     // incrementa V06 en 1
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
Todas las instrucciones proporcionadas ya están validadas y garantizadas de ser correctas.


Basado en la entrevista técnica de SpaceX de CodeSignal
*/
function dia23(commands){
  let registros = new Array(8)
  registros.fill(0)
  let i = 0
  while(i < commands.length){
    let elem = commands[i]
    let key = elem.substring(0,3)
    switch (key) {
      case 'MOV':
        let index = elem.indexOf(',')
        if(elem.substring(4,5) == 'V'){//Copiar
          let index_origen = parseInt(elem.substring(5,index))
          let index_destin = parseInt(elem.substring(index+2,elem.length))
          console.log(`V${index_destin} tiene ${registros[index_origen]}`)
          registros[index_destin] = registros[index_origen]
        }else{//Asignar
          let num = parseInt(elem.substring(4,index))
          let index_add = parseInt(elem.substring(index+2,elem.length))
          registros[index_add] = num
          console.log(`V${index_add} tiene ${num}`)
        }
        i++
        break;
      case 'ADD':
        let index_a = elem.indexOf(',')
        let xx = parseInt(elem.substring(5,index_a))
        let yy = parseInt(elem.substring(index_a+2,elem.length))
        registros[xx] = (registros[xx] + registros[yy]) % 256
        console.log(`Suma V${xx}+V${yy} = ${registros[xx]}`)
        i++
        break;
      case 'DEC':
        let n = parseInt(elem.substring(5, elem.length))
        registros[n] = registros[n] == 0 ? 255 : registros[n]-1
        console.log(`Se decrementó V${n} ahora es ${registros[n]}`)
        i++
        break;
      case 'INC':
        let nn = parseInt(elem.substring(5, elem.length))
        registros[nn] = (registros[nn] + 1)%256
        console.log(`Se Incrementó V${nn} ahora es ${registros[nn]}`)        
        i++
        break;
      case 'JMP':
        let x = parseInt(elem.substring(4, elem.length))
        if(registros[0] != 0){
          console.log(`Se salta a instrucción ${x} ${registros[x]}!=0`)
          i = x
        }else{
          console.log(`${registros[x]} es 0`)
          i++
        }
        break;
      default:
        break;
    }
  }

  console.log(registros)
}
dia23([
  'MOV 10,V00',
  'DEC V00',
  'INC V01',
  'JMP 1',
  'INC V06'
])
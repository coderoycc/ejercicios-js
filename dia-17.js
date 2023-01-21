/*¨
Estamos preparando los sacos para los regalos de Navidad pero cada saco tiene un límite de peso.

Nos dan un array con los nombres de los regalos y un número que es el peso máximo que puede llevar cada saco. El peso de cada regalo es la longitud de su nombre.

Escribe una función que agrupe los regalos en sacos y devuelva un array con los nombres de los regalos de cada saco. Para agrupar los regalos, se separan los nombres por espacios (el espacio no cuenta como peso).

¡Pero ojo! Cada saco puede llevar un máximo de peso, y si el peso de los regalos de un saco supera el peso máximo, se debe separar el último regalo del saco y ponerlo en el siguiente saco.

carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg
*/
function dia17(vec, mayor){
  if (!vec.every(regalo => mayor >= regalo.length)) {
      return []
  }
  let res = []
  let cadena=''
  let i = 0
  let longitud = 0
  while(i < vec.length){ //En caso de que todos los regalos sean menores que el 'mayor' limite de peso
    console.log('Iteramos ',vec[i])
    if(longitud + vec[i].length <= mayor){
      cadena = cadena + vec[i] + ' '
      longitud = longitud + vec[i].length
      console.log(i,'>>>',longitud)
      i++
    }else{
      res.push(cadena.substr(0,cadena.length - 1))
      cadena = ''
      longitud = 0
    }
  }
  if(cadena!=''){
    res.push(cadena.substr(0,cadena.length - 1))
  }
  console.log(res)
}
dia17(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)
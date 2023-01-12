/*
Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.
[1,2,3,2,1] TRUE
[9,10,11,2,12] FALSE
*/
function checkJump(heights) {
  let max = Math.max(...heights)
  let pos = heights.indexOf(max)

  let part1 = heights.slice(0, pos)
  let part2 = heights.slice(pos, heights.length)

  let con1 = part1.every(function(_, i) {
    return i == 0 || part1[i] >= part1[i - 1]
  })

  let con2 = part2.every(function(_, i) {
    return i == 0 || part2[i] <= part2[i - 1]
  })

  return con1 && con2 && part1.length!=0 && part2.length > 1
}
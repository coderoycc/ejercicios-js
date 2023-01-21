/*
Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
*/

function dia21(gifts){
  const mayorName = Math.max(...gifts.map(x => x.name.length), 4)
  const mayorNum = Math.max(...gifts.map(x => (x.quantity + '').length), 8)
  let res = '+'.repeat(mayorName + mayorNum + 7)+'\n'
  res = res + '| Gift '+' '.repeat(mayorName - 4) + '| Quantity '+' '.repeat(mayorNum - 8)+'|\n'
  res = res + '| '+'-'.repeat(mayorName)+' | '+ '-'.repeat(mayorNum)+' |\n'
  gifts.forEach((gift) => {
    res = res + '| '+gift.name+' '.repeat(mayorName - gift.name.length) +
    ' | '+gift.quantity+' '.repeat(mayorNum - (gift.quantity+'').length)+' |\n'
  })
  res = res + '*'.repeat(mayorName + mayorNum + 7)
  console.log(res)
} 
dia21(
  [
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ]
)
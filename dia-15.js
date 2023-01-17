/*
Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

Bolas de colores : B
Regalos pequeños : R
Piñas de pino : P
El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

   R
  P B
 R B B
B P R P
RESULTADO:
['R',
'P B',
'R B B',
'B P R P'
]
*/
function decorateTree(base) {
  let res = []
  let vec = base.split(' ')
  let size = vec.length
  let cadena = base
  for(let j = 0; j < size; j++){
    res.push(cadena)
    cadena = ''
    for(let i = 0; i < vec.length - 1; i++){
      if(vec[i] == vec[i+1]){
        cadena = cadena + vec[i] + ' '
      }else{
        let r = ['P','R','B'].filter( x => 
          [vec[i],vec[i+1]].indexOf(x) == -1
        ).pop()
        cadena = cadena + r + ' '
      }
    }
    cadena = cadena.slice(0, cadena.length - 1)
    vec = cadena.split(' ')
  }
  return res.reverse()
}
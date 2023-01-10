// DIA 4
/*
Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]) // true

  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]
  fitsInOneBox(boxes) // false
*/
function fitsInOneBox(boxes) {
  boxes.sort( (x, y) => {
    if(x.l < y.l && x.w < y.w && x.h < y.h){
        return -1;
    }
    if(x.l > y.l && x.w > y.w && x.h > y.h){
        return 1;
    }
    return 0;
  });
  let sw = true;
  for(let i = 0; i < boxes.length - 1; i++){
    let box = boxes[i];
    let box_1 = boxes[i+1];
    if(box.l >= box_1.l || box.w >= box_1.w || box.h >= box_1.h){
      sw = false;
      break;
    }
  }
  return sw;
}
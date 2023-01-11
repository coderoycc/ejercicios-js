/*
En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

Por ejemplo, si tenemos los siguientes almacenes:
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.


const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

*/
function getGiftsToRefill(a1, a2, a3) {
  a1 = [... new Set(a1)];
  a2 = [... new Set(a2)];
  a3 = [... new Set(a3)];
  let unidos = [...a1,...a2,...a3];
  let map = new Map();
  for(const e of unidos){
    if(map.get(e) == undefined){
      map.set(e,1);
    }else{
      map.set(e, map.get(e)+1);
    }
  }
  let prod = [];
  for(const m of map.keys()){
    if(map.get(m)==1){
      prod.push(m);
    }
  }
  return prod;
}

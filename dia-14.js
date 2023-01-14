/*
Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.

Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo en el menor tiempo posible. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.

Al llegar a una posición, el reno solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha. Visualmente, la pirámide se ve así:
    0
   / \
  7   4
 / \ / \
2   4   6
En código la representamos así:
[
  [0],
  [7, 4],
  [2, 4, 6]
]
*/
function dia14(){
    // let path = [
    //     [0],
    //     [2,3],
    //     [1,7,2],
    //     [9,3,0,7]
    // ]
    // let optimo = path.reverse().reduce((acc, current) => {
    //     return current.map((value, index) => {
    //        return value + Math.min(acc[index], acc[index + 1])
    //     })
    // })
    // console.log(optimo)

    // let dic = ['betto', 'andres','adaya','betto','maria','pascula','adaya','rocio','betto','andres','rocio']
    // let v = arr.reduce(
    //     (acumulador, actual) =>{
    //         //En caso de que no exista ese elemento le asigna 0 (undefined absorve)
    //         acumulador[actual] = (acumulador[actual] || 0) + 1
    //         return acumulador
    //     }
    // , {})
    // console.log(v)


    //dar la vuelta REVERSE()
    let arr = [[9,3,0,7],[1,7,2],[2,3],[0]]
    
    console.log(arr)
    let resultado = arr.reduce((acumulador, actual) =>{
        //acumulador inicialmente es el arr[0]
        //iteramos en el actual para sumar con el menor acumulado
        let nuevo = []
        actual.forEach((x,i) =>{
            nuevo[i] = x + Math.min(acumulador[i],acumulador[i+1])
        })
        acumulador = nuevo
        return acumulador
    })
    console.log(resultado)
}
dia14()
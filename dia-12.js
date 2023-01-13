
function dia12(distancia, trineos){
    let vector = []
    trineos.forEach((elemento, index) =>{
        vector[index] = elemento.consumption*distancia
    })
    let trineo = null
    for(let i = 0; i < vector.length; i++){
        if(vector[i] <= 20){
            trineo = trineos[i].name
        }
    }
    console.log(trineo)
}
dia12(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])

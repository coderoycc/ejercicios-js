/*
Verifica que todas las secuencias independientes de sistemas de iluminación navideña estén en orden estrictamente creciente. Tenemos dos arrays: systemNames y stepNumbers.

systemNames contiene los nombres de los sistemas de iluminación navideña, y stepNumbers contiene los números de paso de cada sistema.

Debemos verificar que los stepNumbers de cada sistema estén en orden estrictamente creciente. Si esto es cierto, devuelve true; de lo contrario, devuelve false.

Por ejemplo:

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]
*/
function dia22(systemNames, stepNumbers){
  let z = new Map()
  systemNames.forEach((value, index) =>{
    if(z.get(value) == undefined){
      z.set(value, [].concat(stepNumbers[index]))
    }else{
      z.set(value, z.get(value).concat(stepNumbers[index]))
    }
  })
  let res = true
  for(const x of z.keys()){
    let ver = z.get(x).every((_, i) => {
      return i == 0 || z.get(x)[i] > z.get(x)[i - 1]
    })
    // console.log(ver)
    res = res && ver
  }
  console.log(res)
}
dia22(
  ["tree_1", "tree_1", "house"], [2, 1, 10]
)
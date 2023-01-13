/*
Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.

Por un lado, tenemos el timestamp de cuándo se hizo el último backup.

También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene dos elementos: el id del archivo modificado y el timestamp de la modificación.

Tienes que crear un programa que devuelva un array con las id de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y ordenados de forma ascendente. 
const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
*/
function getFilesToBackup(lastBackup, changes) {
  let res = {}
  // Yo usé un Set
  for(const e of changes){
    if(e[1] > lastBackup){
      res[e[0]] = e[1]
    //   res.add(e[0])
    }
  }
// let vec = [... res]
  let vec = Object.keys(res)
  return vec.map(x => +x)
//   return vec.sort()
}
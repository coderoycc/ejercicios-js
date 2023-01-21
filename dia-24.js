function dia24(maze){
  let inn = []
  let out = []
  maze.forEach((x, index_x) => {
    x.forEach((y, index_y) => {
      if(y == 'S'){
        inn[0] = index_x
        inn[1] = index_y
      }else if(y == 'E'){
        out[0] = index_x
        out[1] = index_y
      }
    })
  })
  console.log("Entrada: ",inn,"\nSalida: ",out)
}
dia24(
  [
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]
)
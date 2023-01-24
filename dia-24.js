function dia24(maze){
  // let inn = []
  // let out = []
  // maze.forEach((x, index_x) => {
  //   x.forEach((y, index_y) => {
  //     if(y == 'S'){
  //       inn[0] = index_x
  //       inn[1] = index_y
  //     }else if(y == 'E'){
  //       out[0] = index_x
  //       out[1] = index_y
  //     }
  //   })
  // })
  // console.log("Entrada: ",inn,"\nSalida: ",out)
  const envolve = new Array(maze.length + 2).fill('W')
  
  maze = [
    envolve, 
    ...maze.map(row => ['W', ...row, 'W']),
    envolve
  ]

  const moves = [
    [-1, 0], 
    [1, 0], 
    [0, -1], 
    [0, 1]
  ]

  function couldWeExit(maze, row, col) {
    return (maze[row][col] === 'E') || (
      (maze[row][col] === ' ') && 
      (maze[row][col] = '.') && 
      moves.some(([deltaRow, deltaCol]) => 
        couldWeExit(maze, row + deltaRow, col + deltaCol)
      )
    )
  }

  const startRow = maze.findIndex(
    columns => columns.find(c => c === 'S')
  )

  const startCol = maze[startRow].findIndex(
    cell => cell === 'S'
  )

  maze[startRow][startCol] = ' '

  const canExitNow = couldWeExit(
    maze, 
    startRow, 
    startCol
  )

  return canExitNow
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
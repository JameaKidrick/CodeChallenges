let rotated = []

function rotate(matrix) {
  matrix.map(inner => {
    console.log(inner[2])
  })

  let rotated_inner = []
  
    // PULL FIRST ELEMENT FOR EACH INNER ARRAY
    for(let j = 0; j <= matrix.length-1; j++){
      // RETURN THE ELEMENTS BACKWARDS
      for(let i = matrix.length - 1; i >= 0; i--){
        rotated_inner.push(matrix[i][j])
      }
      rotated.push(rotated_inner)
      rotated_inner = []
    }
  return rotated
}

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
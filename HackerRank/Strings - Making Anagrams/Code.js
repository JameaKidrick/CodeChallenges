function makeAnagram(a, b) {
  a = a.split('')
  b = b.split('')
  let c = []
  for(let i = a.length - 1; i >= 0; i--){
      b.find((letterB, indexB) => {
          if(a[i] === letterB){
              c.push(a[i])
          }
      })
  }
  let deletions = c.length * 2
  return deletions
}
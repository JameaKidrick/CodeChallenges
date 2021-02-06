/*
 * @param {number} n - a positive integer
 * @return {number}
*/
var hammingWeight = function(n) {
  n = parseInt(n)
  let bits = 0
  const binary = n.toString(2).split('')
  
  binary.map(digit => {
      if(digit === '1'){
          bits += 1
      }
  })
  
  return bits
};

hammingWeight(11)
// => 3
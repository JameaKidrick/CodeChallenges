/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  split = x.toString().split('')
  let j = split.length - 1
  let answer = 0
  console.log(Math.floor(split.length/2))

  for(let i = 0; i < split.length; i++){


      if(split[i] !== '-' && i !== j && i !== j - 1){
          console.log('SWITCHING', split, split[i], split[j])
          console.log('LOOP CHECK', i, j)
          temp = split[i]
          split[i] = split[j]
          split[j] = temp
          j--
          console.log('SWITCHED', split)
      }else if(i === j - 1 && (i === Math.floor(split.length/2) || i + 1 === Math.floor(split.length/2))){
          temp = split[i]
          split[i] = split[j]
          split[j] = temp
          answer = Number(split.join(''))
      }else if(i === j){
          answer = Number(split.join(''))
      }
      console.log(split, i, split[i], j, split[j])

  }
  if(answer < 2147483647 && answer > -2147483647){
      return answer
  }else{
      return 0
  }
  
};
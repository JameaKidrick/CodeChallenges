// UNDERSTAND
/*
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]
Pairs: 1-1 2-2 
Odds: 1 3 2
Output: 2

n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
Pairs: 10-10 10-10 20-20
Odds: 30 50 20
Output: 3
*/

// PLAN
/*
- Create an object with unique keys (colors/ints) and initialize value with 1
obj = {1: 1, 2: 1, 3: 1}
- If we come across an int that is already present as a key, add 1 to value
obj = {1: 3, 2: 3, 3: 1}
- Set up count for pairs
count = 0
- Use division to find pairs, add one to count when pair found

count += 1
*/

const sockMerchant = (n, arr) => {
  let object = {}
  let count = 0
  arr.map((colors) => {
    if(!(colors in object)){
      object[colors] = 1
    } else {
      object[colors] += 1
    }
  })
  let pairs = Object.values(object).map((pair) => {
    return Math.floor(pair/2)
  }).reduce((acc, curr) =>{
    return acc + curr
  })
  return pairs
}

sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])
// -> 2
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
// -> 3
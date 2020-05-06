// UNDERSTAND
/*
c = [0, 1, 0, 0, 0, 1, 0]
Can jump c[0] > c[2] > c[4] > c[6]
OR
Can jump c[0] > c[2] > c[3] > c[4] > c[6]
Answer = 3

c = [0, 0, 1, 0, 0, 1, 0]
Can jump c[0] > c[1] > c[3] > c[4] > c[6]
Answer = 4

c = [0, 0, 0, 0, 1, 0]
Can jump c[0] > c[1] > c[2] > c[3] > c[5]
OR
Can jump c[0] > c[2] > c[3] > c[5]
Answer = 3
*/

// PLAN
/*
- Initiate jump variable with 0
jump = 0

- Loop through the array
for loop

- Check if current location (i) plus 2 is 0
c[i] === 0?
-- If so, jump to that index and add 1 to jump
i += 2
jump ++
-- If not, jump to next index and add 1 to jump
jump ++

- Return jump
return jump
*/

// EXECUTE
function jumpingOnClouds(c) {
  let jump = 0
  for(let i = 0; i < c.length; i++){
    if(c[i + 2] === 0){
      i ++
    }
    jump ++
  }
  return jump - 1
}

jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])
// -> 3
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
// -> 4
jumpingOnClouds([0, 0, 0, 0, 1, 0])
// -> 3
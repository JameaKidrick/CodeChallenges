// UNDERSTAND
/*
d = 2
a = [1, 2, 3, 4, 5]
Answer = [3, 4, 5, 1, 2]

d = 4
a = [1, 2, 3, 4, 5]
Answer = [5, 1, 2, 3, 4]

EDGE CASES:
d = 5
a = [1]
Answer = [1]
*/

// PLAN
/*
- LOOP UNTIL I = D
for loop

- POP OFF THE FIRST ELEMENT
first = a.pop

- PUSH TO END OF ARRAY
a.push(first)

- RETURN AS ONE LINE OF INTEGERS WITH SPACES IN BETWEEN
1 2 3 4 5
*/

// EXECUTE
function rotLeft(a, d) {
  let str = ''
  for(let i = 0; i < d; i++){
    let first = a.shift()
    a.push(first)
  }
  a.map((element) => {
    str += element
  })
  str = a.join(' ')
  return str
}

rotLeft([1, 2, 3, 4, 5], 2)
// -> 3 4 5 1 2

rotLeft([1, 2, 3, 4, 5], 4)
// -> 5 1 2 3 4